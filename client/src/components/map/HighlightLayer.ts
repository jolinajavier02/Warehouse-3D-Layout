import * as THREE from 'three';
import type { LocationMesh } from './MapObjects';

const hoverColor = new THREE.Color('#60a5fa');
const searchedColor = new THREE.Color('#facc15');
const selectedColor = new THREE.Color('#f97316');

export function applyHighlights(
  meshes: LocationMesh[],
  hoveredLocationId: string | null,
  selectedLocationId: string | null,
  searchedLocationIds: Set<string> = new Set()
) {
  meshes.forEach((mesh) => {
    if (mesh.userData.locationId === selectedLocationId) {
      mesh.material.color.copy(selectedColor);
      mesh.material.emissive.set('#7c2d12');
      mesh.material.emissiveIntensity = 0.35;
      return;
    }

    if (mesh.userData.locationId === hoveredLocationId) {
      mesh.material.color.copy(hoverColor);
      mesh.material.emissive.set('#1d4ed8');
      mesh.material.emissiveIntensity = 0.25;
      return;
    }

    if (searchedLocationIds.has(mesh.userData.locationId)) {
      mesh.material.color.copy(searchedColor);
      mesh.material.emissive.set('#854d0e');
      mesh.material.emissiveIntensity = 0.2;
      return;
    }

    mesh.material.color.copy(mesh.userData.baseColor);
    mesh.material.emissive.set('#000000');
    mesh.material.emissiveIntensity = 0;
  });
}
