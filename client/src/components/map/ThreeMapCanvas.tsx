import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import type { Location } from '../../types/location';
import { applyHighlights } from './HighlightLayer';
import { buildLocationGroup, type LocationMesh } from './MapObjects';
import { getIntersectedLocationId } from './RaycasterHelper';

interface ThreeMapCanvasProps {
  locations: Location[];
  hoveredLocationId: string | null;
  selectedLocationId: string | null;
  onHoverLocation: (locationId: string | null) => void;
  onSelectLocation: (locationId: string) => void;
}

export default function ThreeMapCanvas({
  locations,
  hoveredLocationId,
  selectedLocationId,
  onHoverLocation,
  onSelectLocation
}: ThreeMapCanvasProps) {
  const hostRef = useRef<HTMLDivElement | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const groupRef = useRef<THREE.Group | null>(null);
  const meshesRef = useRef<LocationMesh[]>([]);

  useEffect(() => {
    const host = hostRef.current;

    if (!host) {
      return;
    }

    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#eef2f5');
    sceneRef.current = scene;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    host.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 1000);
    camera.position.set(48, 52, 72);
    cameraRef.current = camera;

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.target.set(20, 0, 20);
    controls.maxPolarAngle = Math.PI * 0.48;

    const ambient = new THREE.HemisphereLight('#ffffff', '#a8b0b7', 2.1);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight('#ffffff', 2.6);
    keyLight.position.set(20, 60, 30);
    keyLight.castShadow = true;
    scene.add(keyLight);

    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(80, 80),
      new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.8 })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.set(20, -0.04, 20);
    floor.receiveShadow = true;
    scene.add(floor);

    function resize() {
      const { width, height } = host.getBoundingClientRect();
      renderer.setSize(width, height, false);
      camera.aspect = width / Math.max(height, 1);
      camera.updateProjectionMatrix();
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);
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
      host.removeChild(renderer.domElement);
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
        const mesh = object as THREE.Mesh;
        mesh.geometry?.dispose();
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
  }, [locations]);

  useEffect(() => {
    applyHighlights(meshesRef.current, hoveredLocationId, selectedLocationId);
  }, [hoveredLocationId, selectedLocationId, locations]);

  return <div className="three-map-canvas" ref={hostRef} />;
}
