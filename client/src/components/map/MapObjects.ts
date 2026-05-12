import * as THREE from 'three';
import type { Location, LocationType } from '../../types/location';

export type LocationMesh = THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial> & {
  userData: {
    locationId: string;
    baseColor: THREE.Color;
  };
};

const typeColors: Record<LocationType, string> = {
  Boundary: '#d8dde2',
  Shop: '#cfd4d9',
  Path: '#4b5258',
  Dock: '#2563eb',
  Rack: '#7c8a96',
  Office: '#ef4444'
};

export function createLocationMesh(location: Location): LocationMesh {
  const width = Math.max(location.xMax - location.xMin, 0.1);
  const depth = Math.max(location.yMax - location.yMin, 0.1);
  const height = Math.max(location.zMax - location.zMin, 0.1);
  const geometry = new THREE.BoxGeometry(width, height, depth);
  const baseColor = new THREE.Color(typeColors[location.type]);
  const material = new THREE.MeshStandardMaterial({
    color: baseColor,
    roughness: 0.55,
    metalness: 0.05,
    transparent: location.type === 'Boundary',
    opacity: location.type === 'Boundary' ? 0.22 : 1
  });
  const mesh = new THREE.Mesh(geometry, material) as LocationMesh;

  mesh.position.set(
    location.xMin + width / 2,
    location.zMin + height / 2,
    location.yMin + depth / 2
  );
  mesh.castShadow = location.type !== 'Boundary';
  mesh.receiveShadow = true;
  mesh.userData.locationId = location.id;
  mesh.userData.baseColor = baseColor;

  return mesh;
}

export function buildLocationGroup(locations: Location[]) {
  const group = new THREE.Group();

  locations.forEach((location) => {
    group.add(createLocationMesh(location));
  });

  return group;
}
