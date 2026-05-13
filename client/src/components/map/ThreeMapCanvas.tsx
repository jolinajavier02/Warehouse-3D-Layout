import { useEffect, useRef, useState } from 'react';
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
}

export default function ThreeMapCanvas({
  locations,
  hoveredLocationId,
  selectedLocationId,
  searchedLocationIds,
  onHoverLocation,
  onSelectLocation
}: ThreeMapCanvasProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const controlsRef = useRef<OrbitControls | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const meshesRef = useRef<LocationMesh[]>([]);
  const [canvasError, setCanvasError] = useState<string | null>(null);

  useEffect(() => {
    const host = hostRef.current;

    if (!host) {
      return;
    }

    const hostElement = host;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#eef2f5');
    scene.fog = new THREE.Fog('#eef2f5', 90, 180);
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

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(54, 58, 70);
    cameraRef.current = camera;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.08;
    controls.target.set(20, 0, 20);
    controls.maxPolarAngle = Math.PI * 0.48;
    controls.minDistance = 18;
    controls.maxDistance = 145;
    controlsRef.current = controls;

    const ambient = new THREE.HemisphereLight('#ffffff', '#a8b0b7', 2.1);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight('#ffffff', 2.6);
    keyLight.position.set(20, 60, 30);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.set(2048, 2048);
    keyLight.shadow.camera.near = 10;
    keyLight.shadow.camera.far = 140;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight('#dbeafe', 1.1);
    fillLight.position.set(-40, 34, -16);
    scene.add(fillLight);

    function resize() {
      const { width, height } = hostElement.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
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

    const handlePointerMove = (event: PointerEvent) => {
      const locationId = getIntersectedLocationId(event, renderer.domElement, camera, meshesRef.current);
      onHoverLocation(locationId);
    };

    const handlePointerLeave = () => onHoverLocation(null);

    const handlePointerUp = (event: PointerEvent) => {
      const locationId = getIntersectedLocationId(event, renderer.domElement, camera, meshesRef.current);

      if (locationId) {
        onSelectLocation(locationId);
      }
    };

    renderer.domElement.addEventListener('pointermove', handlePointerMove);
    renderer.domElement.addEventListener('pointerleave', handlePointerLeave);
    renderer.domElement.addEventListener('pointerup', handlePointerUp);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
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
  }, [onHoverLocation, onSelectLocation]);

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
      if (object instanceof THREE.Mesh) {
        meshes.push(object as LocationMesh);
      }
    });

    groupRef.current = group;
    meshesRef.current = meshes;
    scene.add(group);

    const camera = cameraRef.current;
    const controls = controlsRef.current;

    if (camera && controls && locations.length > 0) {
      frameWarehouse(camera, controls, group);
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
    </div>
  );
}

function frameWarehouse(camera: THREE.PerspectiveCamera, controls: OrbitControls, group: THREE.Group) {
  const bounds = new THREE.Box3().setFromObject(group);
  const center = bounds.getCenter(new THREE.Vector3());
  const size = bounds.getSize(new THREE.Vector3());
  const maxSize = Math.max(size.x, size.y, size.z, 1);
  const distance = maxSize * 1.65;

  controls.target.copy(center);
  camera.position.set(center.x + distance * 0.72, center.y + distance * 0.88, center.z + distance);
  camera.near = Math.max(distance / 120, 0.1);
  camera.far = distance * 8;
  camera.updateProjectionMatrix();
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
