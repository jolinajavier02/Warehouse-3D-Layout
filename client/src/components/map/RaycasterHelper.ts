import * as THREE from 'three';

export function getIntersectedLocationId(
  event: PointerEvent,
  element: HTMLElement,
  camera: THREE.Camera,
  objects: THREE.Object3D[]
) {
  const bounds = element.getBoundingClientRect();
  const pointer = new THREE.Vector2(
    ((event.clientX - bounds.left) / bounds.width) * 2 - 1,
    -((event.clientY - bounds.top) / bounds.height) * 2 + 1
  );
  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera(pointer, camera);

  const [firstHit] = raycaster.intersectObjects(objects, true);
  const locationId = firstHit?.object.userData.locationId;

  return typeof locationId === 'string' ? locationId : null;
}
