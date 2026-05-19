import { useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { Location } from '../../types/location';
import { applyHighlights } from './HighlightLayer';
import IsometricMap from './IsometricMap';
import { buildLocationGroup, type LocationMesh } from './MapObjects';
import { getIntersectedLocationId } from './RaycasterHelper';

interface ThreeMapCanvasProps {
  locations: Location[];
  hoveredLocationId: string | null;
  selectedLocationId: string | null;
  searchedLocationIds: string[];
  onHoverLocation: (locationId: string | null) => void;
  onSelectLocation: (locationId: string) => void;
  staticView?: boolean;
}

export default function ThreeMapCanvas({
  locations,
  hoveredLocationId,
  selectedLocationId,
  searchedLocationIds,
  onHoverLocation,
  onSelectLocation,
  staticView = false
}: ThreeMapCanvasProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.OrthographicCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const meshesRef = useRef<LocationMesh[]>([]);
  const pointerDownPositionRef = useRef<{ x: number; y: number } | null>(null);
  const rotationKnobRef = useRef<{ angle: number } | null>(null);
  const [canvasError, setCanvasError] = useState<string | null>(null);
  const [controllerVisible, setControllerVisible] = useState(true);

  useEffect(() => {
    const host = hostRef.current;

    if (!host) {
      return;
    }

    const hostElement = host;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#ffffff');
    sceneRef.current = scene;

    let renderer: THREE.WebGLRenderer;

    try {
      renderer = new THREE.WebGLRenderer({ antialias: true });
      setCanvasError(null);
    } catch {
      setCanvasError('webgl-unavailable');
      return;
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    hostElement.appendChild(renderer.domElement);

    const camera = new THREE.OrthographicCamera(-60, 60, 40, -40, 0.1, 1000);
    camera.position.set(126, 112, 118);
    cameraRef.current = camera;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.target.set(46, 0, 29);
    controls.maxPolarAngle = Math.PI * 0.48;
    controls.enablePan = !staticView;
    controls.enableRotate = !staticView;
    controls.enableZoom = true;
    controls.minZoom = 0.35;
    controls.maxZoom = 32;
    controls.mouseButtons = {
      LEFT: THREE.MOUSE.PAN,
      MIDDLE: THREE.MOUSE.DOLLY,
      RIGHT: THREE.MOUSE.ROTATE
    };
    controls.touches = {
      ONE: THREE.TOUCH.PAN,
      TWO: THREE.TOUCH.DOLLY_ROTATE
    };
    controlsRef.current = controls;

    const ambient = new THREE.HemisphereLight('#ffffff', '#a8b0b7', 1.6);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight('#ffffff', 2.0);
    keyLight.position.set(20, 60, 30);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    keyLight.shadow.camera.near = 10;
    keyLight.shadow.camera.far = 140;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight('#dbeafe', 0.8);
    fillLight.position.set(-40, 34, -16);
    scene.add(fillLight);

    function resize() {
      const { width, height } = hostElement.getBoundingClientRect();
      renderer.setSize(width, height, false);

      if (groupRef.current && groupRef.current.children.length > 0) {
        frameWarehouse(camera, controls, groupRef.current, width / Math.max(height, 1));
      } else {
        frameEmptyMap(camera, controls, width / Math.max(height, 1));
      }
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(hostElement);
    resize();

    let animationFrame = 0;
    function render() {
      controls.update();
      renderer.render(scene, camera);
      animationFrame = requestAnimationFrame(render);
    }
    render();

    const handlePointerDown = (event: PointerEvent) => {
      pointerDownPositionRef.current = { x: event.clientX, y: event.clientY };
    };

    const handlePointerMove = (event: PointerEvent) => {
      const locationId = getIntersectedLocationId(event, renderer.domElement, camera, meshesRef.current);
      onHoverLocation(locationId);
    };

    const handlePointerLeave = () => onHoverLocation(null);

    const handlePointerUp = (event: PointerEvent) => {
      const pointerDownPosition = pointerDownPositionRef.current;
      pointerDownPositionRef.current = null;

      if (pointerDownPosition && Math.hypot(event.clientX - pointerDownPosition.x, event.clientY - pointerDownPosition.y) > 6) {
        return;
      }

      const locationId = getIntersectedLocationId(event, renderer.domElement, camera, meshesRef.current);

      if (locationId) {
        onSelectLocation(locationId);
      }
    };

    renderer.domElement.addEventListener('pointerdown', handlePointerDown);
    renderer.domElement.addEventListener('pointermove', handlePointerMove);
    renderer.domElement.addEventListener('pointerleave', handlePointerLeave);
    renderer.domElement.addEventListener('pointerup', handlePointerUp);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      renderer.domElement.removeEventListener('pointerdown', handlePointerDown);
      renderer.domElement.removeEventListener('pointermove', handlePointerMove);
      renderer.domElement.removeEventListener('pointerleave', handlePointerLeave);
      renderer.domElement.removeEventListener('pointerup', handlePointerUp);
      controls.dispose();
      renderer.dispose();
      if (renderer.domElement.parentElement === hostElement) {
        hostElement.removeChild(renderer.domElement);
      }
      controlsRef.current = null;
      sceneRef.current = null;
      cameraRef.current = null;
      groupRef.current = null;
      meshesRef.current = [];
    };
  }, [onHoverLocation, onSelectLocation, staticView]);

  useEffect(() => {
    const scene = sceneRef.current;

    if (!scene) {
      return;
    }

    if (groupRef.current) {
      scene.remove(groupRef.current);
      groupRef.current.traverse((object) => {
        disposeRenderable(object);
      });
    }

    const group = buildLocationGroup(locations);
    const meshes: LocationMesh[] = [];
    group.traverse((object) => {
      if (object instanceof THREE.Mesh && (object.userData.locationType === 'Shop' || object.userData.locationType === 'Gate')) {
        meshes.push(object as LocationMesh);
      }
    });

    groupRef.current = group;
    meshesRef.current = meshes;
    scene.add(group);

    const camera = cameraRef.current;
    const controls = controlsRef.current;

    if (camera && controls && locations.length > 0) {
      const { width, height } = hostRef.current?.getBoundingClientRect() ?? { width: 1, height: 1 };
      frameWarehouse(camera, controls, group, width / Math.max(height, 1));
    } else if (camera && controls) {
      const { width, height } = hostRef.current?.getBoundingClientRect() ?? { width: 1, height: 1 };
      frameEmptyMap(camera, controls, width / Math.max(height, 1));
    }
  }, [locations]);

  useEffect(() => {
    applyHighlights(meshesRef.current, hoveredLocationId, selectedLocationId, new Set(searchedLocationIds));
  }, [hoveredLocationId, selectedLocationId, searchedLocationIds, locations]);

  useEffect(() => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    if (!camera || !controls || !selectedLocationId) {
      return;
    }

    const selectedMesh = meshesRef.current.find((mesh) => mesh.userData.locationId === selectedLocationId);

    if (!selectedMesh) {
      return;
    }

    const target = new THREE.Vector3();
    selectedMesh.getWorldPosition(target);
    controls.target.lerp(target, 0.55);
    controls.update();
  }, [selectedLocationId]);

  const rotateCamera = (degrees: number) => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    if (!camera || !controls || staticView) {
      return;
    }

    const offset = camera.position.clone().sub(controls.target);
    offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), THREE.MathUtils.degToRad(degrees));
    camera.position.copy(controls.target).add(offset);
    controls.update();
  };

  const zoomCamera = (factor: number) => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    if (!camera || !controls) {
      return;
    }

    camera.zoom = THREE.MathUtils.clamp(camera.zoom * factor, controls.minZoom, controls.maxZoom);
    camera.updateProjectionMatrix();
    controls.update();
  };

  const panCamera = (xDirection: number, yDirection: number) => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;

    if (!camera || !controls || staticView) {
      return;
    }

    camera.updateMatrixWorld();
    const right = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 0);
    const up = new THREE.Vector3().setFromMatrixColumn(camera.matrixWorld, 1);
    const viewHeight = (camera.top - camera.bottom) / Math.max(camera.zoom, 0.1);
    const distance = viewHeight * 0.12;
    const movement = right.multiplyScalar(xDirection * distance).add(up.multiplyScalar(yDirection * distance));

    camera.position.add(movement);
    controls.target.add(movement);
    controls.update();
  };

  const resetCamera = () => {
    const camera = cameraRef.current;
    const controls = controlsRef.current;
    const group = groupRef.current;
    const host = hostRef.current;

    if (!camera || !controls || !host) {
      return;
    }

    const { width, height } = host.getBoundingClientRect();

    if (group && group.children.length > 0) {
      frameWarehouse(camera, controls, group, width / Math.max(height, 1));
    } else {
      frameEmptyMap(camera, controls, width / Math.max(height, 1));
    }
  };

  const handleRotationKnobPointerDown = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (staticView) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.currentTarget.setPointerCapture(event.pointerId);
    rotationKnobRef.current = {
      angle: getControlAngle(event.clientX, event.clientY, event.currentTarget)
    };
  };

  const handleRotationKnobPointerMove = (event: ReactPointerEvent<HTMLButtonElement>) => {
    const rotationKnob = rotationKnobRef.current;

    if (!rotationKnob || staticView) {
      return;
    }

    event.preventDefault();
    const nextAngle = getControlAngle(event.clientX, event.clientY, event.currentTarget);
    const delta = shortestAngleDelta(rotationKnob.angle, nextAngle);
    rotateCamera(delta);
    rotationKnobRef.current = { angle: nextAngle };
  };

  const handleRotationKnobPointerEnd = (event: ReactPointerEvent<HTMLButtonElement>) => {
    if (event.currentTarget.hasPointerCapture(event.pointerId)) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    rotationKnobRef.current = null;
  };

  return (
    <div className="three-map-canvas" ref={hostRef}>
      {canvasError && (
        <IsometricMap
          locations={locations}
          hoveredLocationId={hoveredLocationId}
          selectedLocationId={selectedLocationId}
          searchedLocationIds={searchedLocationIds}
          onHoverLocation={onHoverLocation}
          onSelectLocation={onSelectLocation}
        />
      )}
      {!canvasError && (
        <>
          <button
            className="map-controller-toggle"
            type="button"
            onClick={() => setControllerVisible((visible) => !visible)}
            aria-label={controllerVisible ? 'Hide map controller' : 'Show map controller'}
            aria-expanded={controllerVisible}
          >
            <span aria-hidden="true" />
          </button>
          <aside
            className={`map-movement-controller ${controllerVisible ? '' : 'hidden'}`}
            aria-label="Map movement controls"
            onPointerDown={(event) => event.stopPropagation()}
          >
            <div className="map-orbit-pad" aria-label="Move map">
              <button className="pad-button pad-up" type="button" onClick={() => panCamera(0, 1)} disabled={staticView} aria-label="Move up">
                <span aria-hidden="true" />
              </button>
              <button
                className="pad-button pad-right"
                type="button"
                onClick={() => panCamera(1, 0)}
                disabled={staticView}
                aria-label="Move right"
              >
                <span aria-hidden="true" />
              </button>
              <button
                className="pad-button pad-down"
                type="button"
                onClick={() => panCamera(0, -1)}
                disabled={staticView}
                aria-label="Move down"
              >
                <span aria-hidden="true" />
              </button>
              <button
                className="pad-button pad-left"
                type="button"
                onClick={() => panCamera(-1, 0)}
                disabled={staticView}
                aria-label="Move left"
              >
                <span aria-hidden="true" />
              </button>
              <button
                className="pad-center"
                type="button"
                onPointerCancel={handleRotationKnobPointerEnd}
                onPointerDown={handleRotationKnobPointerDown}
                onPointerMove={handleRotationKnobPointerMove}
                onPointerUp={handleRotationKnobPointerEnd}
                disabled={staticView}
                aria-label="Drag center knob to rotate map"
              >
                <span className="pad-center-ring" aria-hidden="true" />
              </button>
            </div>
            <div className="map-controller-actions" aria-label="Zoom controls">
              <button type="button" onClick={() => zoomCamera(1.38)} aria-label="Zoom in">
                +
              </button>
              <button type="button" onClick={() => zoomCamera(0.74)} aria-label="Zoom out">
                -
              </button>
              <button type="button" onClick={resetCamera} aria-label="Reset view">
                Reset
              </button>
            </div>
          </aside>
        </>
      )}
    </div>
  );
}

function frameWarehouse(camera: THREE.OrthographicCamera, controls: OrbitControls, group: THREE.Group, aspect: number) {
  const bounds = new THREE.Box3().setFromObject(group);
  const center = bounds.getCenter(new THREE.Vector3());
  const size = bounds.getSize(new THREE.Vector3());
  const viewHeight = Math.max(size.z * 1.28, size.x * 1.02 / Math.max(aspect, 0.1), 48);

  camera.zoom = 1;
  controls.target.copy(center);
  camera.position.set(center.x + 80, center.y + 84, center.z + 86);
  camera.near = 0.1;
  camera.far = 600;
  setOrthographicFrame(camera, viewHeight, aspect);
  controls.update();
}

function setOrthographicFrame(camera: THREE.OrthographicCamera, viewHeight: number, aspect: number) {
  const viewWidth = viewHeight * Math.max(aspect, 0.1);

  camera.left = -viewWidth / 2;
  camera.right = viewWidth / 2;
  camera.top = viewHeight / 2;
  camera.bottom = -viewHeight / 2;
  camera.updateProjectionMatrix();
}

function getControlAngle(clientX: number, clientY: number, element: HTMLElement) {
  const bounds = element.getBoundingClientRect();
  const centerX = bounds.left + bounds.width / 2;
  const centerY = bounds.top + bounds.height / 2;

  return THREE.MathUtils.radToDeg(Math.atan2(clientY - centerY, clientX - centerX));
}

function shortestAngleDelta(previousAngle: number, nextAngle: number) {
  let delta = nextAngle - previousAngle;

  if (delta > 180) {
    delta -= 360;
  }
  if (delta < -180) {
    delta += 360;
  }

  return delta;
}

function frameEmptyMap(camera: THREE.OrthographicCamera, controls: OrbitControls, aspect: number) {
  camera.zoom = 1;
  controls.target.set(0, 0, 0);
  camera.position.set(80, 84, 86);
  camera.near = 0.1;
  camera.far = 600;
  setOrthographicFrame(camera, 86, aspect);
  controls.update();
}

function disposeRenderable(object: THREE.Object3D) {
  const renderable = object as THREE.Mesh | THREE.Sprite;
  const geometry = (renderable as THREE.Mesh).geometry;
  const material = renderable.material;

  geometry?.dispose();

  if (Array.isArray(material)) {
    material.forEach(disposeMaterial);
  } else {
    disposeMaterial(material);
  }
}

function disposeMaterial(material?: THREE.Material) {
  if (!material) {
    return;
  }

  const textureMaterial = material as THREE.Material & { map?: THREE.Texture };
  textureMaterial.map?.dispose();
  material.dispose();
}
