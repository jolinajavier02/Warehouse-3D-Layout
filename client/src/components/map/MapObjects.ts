import * as THREE from 'three';
import type { Location, LocationType } from '../../types/location';

export type LocationMesh = THREE.Mesh<THREE.BufferGeometry, THREE.MeshStandardMaterial> & {
  userData: {
    locationId: string;
    locationType: LocationType;
    baseColor: THREE.Color;
  };
};

const typeColors: Record<LocationType, string> = {
  Boundary: '#9aa3a6',
  'Layout Zone': '#ffffff',
  'Main Aisle': '#d9ebfb',
  'Work Area': '#fed7aa',
  Pillar: '#334155',
  Gate: '#f59e0b',
  Wall: '#94a3b8',
  'Non-placeable Area': '#fda4af',
  Shelf: '#0f766e',
  Nestainer: '#2563eb',
  'Operation Area': '#fecaca',
  Shop: '#cfd4d9',
  Path: '#b8c3cb',
  Dock: '#2563eb',
  Rack: '#7c8a96',
  Office: '#ef4444'
};

const shopAccentColors = [
  '#dc2626',
  '#7c3aed',
  '#db2777',
  '#ea580c',
  '#0891b2',
  '#2563eb',
  '#16a34a',
  '#ca8a04',
  '#ef4444',
  '#4f46e5'
];

const dimensionColors = ['#475569', '#2563eb', '#16a34a', '#f59e0b', '#7c3aed', '#db2777'];
type WorkerPose = 'pointing' | 'carrying' | 'stacking' | 'clipboard' | 'sitting';

export function createLocationMesh(location: Location): LocationMesh {
  const bounds = normalizedBounds(location);
  const width = Math.max(bounds.xMax - bounds.xMin, 0.1);
  const depth = Math.max(bounds.yMax - bounds.yMin, 0.1);
  const height = Math.max(bounds.zMax - bounds.zMin, 0.1);
  const geometry = createLocationGeometry(location, width, height, depth);
  const baseColor = new THREE.Color(colorForLocation(location));
  const material = new THREE.MeshStandardMaterial({
    color: baseColor,
    roughness: location.type === 'Boundary' || location.type === 'Layout Zone' ? 0.88 : 0.52,
    metalness: 0.02,
    transparent: false,
    opacity: 1,
    depthTest: true,
    depthWrite: true,
    fog: false,
    side: THREE.DoubleSide
  });
  const mesh = new THREE.Mesh(geometry, material) as unknown as LocationMesh;

  mesh.position.set(
    bounds.xMin + width / 2,
    bounds.zMin + height / 2,
    bounds.yMin + depth / 2
  );
  mesh.castShadow = location.type === 'Shop' || location.type === 'Gate';
  mesh.receiveShadow = true;
  mesh.userData.locationId = location.id;
  mesh.userData.locationType = location.type;
  mesh.userData.baseColor = baseColor;

  return mesh;
}

function createLocationGeometry(location: Location, width: number, height: number, depth: number) {
  if (location.type === 'Shop') {
    const shape = shapeForLocation(location);

    if (shape === 'circle') {
      const radius = Math.max(Math.min(width, depth) / 2, 0.2);
      return new THREE.CylinderGeometry(radius, radius, height, 48);
    }

    if (shape === 'oblong') {
      return createExtrudedFootprint(createRoundedRectShape(width, depth, Math.min(width, depth) / 2), height);
    }

    if (shape === 'animal') {
      return createExtrudedFootprint(createAnimalShape(width, depth), height);
    }

    if (shape === 'tree') {
      return new THREE.ConeGeometry(Math.max(width, depth) / 2, height, 24);
    }

    if (shape === 'person') {
      return new THREE.CapsuleGeometry(Math.min(width, depth) / 2, Math.max(height - Math.min(width, depth), 0.4), 8, 18);
    }
  }

  return new THREE.BoxGeometry(width, height, depth);
}

function createExtrudedFootprint(shape: THREE.Shape, height: number) {
  const geometry = new THREE.ExtrudeGeometry(shape, {
    depth: height,
    bevelEnabled: false,
    curveSegments: 14
  });

  geometry.translate(0, 0, -height / 2);
  geometry.rotateX(-Math.PI / 2);
  geometry.computeVertexNormals();

  return geometry;
}

function createRoundedRectShape(width: number, depth: number, radius: number) {
  const x = -width / 2;
  const y = -depth / 2;
  const w = width;
  const d = depth;
  const r = Math.max(0.2, Math.min(radius, w / 2, d / 2));
  const shape = new THREE.Shape();

  shape.moveTo(x + r, y);
  shape.lineTo(x + w - r, y);
  shape.quadraticCurveTo(x + w, y, x + w, y + r);
  shape.lineTo(x + w, y + d - r);
  shape.quadraticCurveTo(x + w, y + d, x + w - r, y + d);
  shape.lineTo(x + r, y + d);
  shape.quadraticCurveTo(x, y + d, x, y + d - r);
  shape.lineTo(x, y + r);
  shape.quadraticCurveTo(x, y, x + r, y);

  return shape;
}

function createAnimalShape(width: number, depth: number) {
  const shape = new THREE.Shape();
  const halfWidth = width / 2;
  const halfDepth = depth / 2;

  shape.moveTo(-halfWidth * 0.72, -halfDepth * 0.2);
  shape.lineTo(-halfWidth * 0.52, -halfDepth * 0.62);
  shape.lineTo(-halfWidth * 0.3, -halfDepth * 0.24);
  shape.lineTo(halfWidth * 0.3, -halfDepth * 0.24);
  shape.lineTo(halfWidth * 0.52, -halfDepth * 0.62);
  shape.lineTo(halfWidth * 0.72, -halfDepth * 0.2);
  shape.quadraticCurveTo(halfWidth * 0.9, halfDepth * 0.18, halfWidth * 0.5, halfDepth * 0.42);
  shape.quadraticCurveTo(0, halfDepth * 0.64, -halfWidth * 0.5, halfDepth * 0.42);
  shape.quadraticCurveTo(-halfWidth * 0.9, halfDepth * 0.18, -halfWidth * 0.72, -halfDepth * 0.2);

  return shape;
}

export function buildLocationGroup(locations: Location[]) {
  const group = new THREE.Group();
  const planBounds = getPlanBounds(locations);

  if (planBounds) {
    group.add(createPlanGrid(planBounds));
  }

  locations.forEach((location) => {
    if (isOutlineOnly(location)) {
      return;
    }

    const mesh = createLocationMesh(location);
    group.add(mesh);

    const decorationDetails = createDecorationDetails(location);
    if (decorationDetails) {
      group.add(decorationDetails);
    }

    if (location.type === 'Shop' || location.type === 'Gate') {
      group.add(createLocationEdges(location));
    }

    if (shouldShowLocationLabel(location)) {
      group.add(createLocationLabel(location));
    }
  });

  if (planBounds) {
    group.add(createWarehouseActivityLayer(locations, planBounds));
    group.add(createDimensionLayer(locations, planBounds));
  }

  return group;
}

function shouldShowLocationLabel(location: Location) {
  const text = `${location.name} ${location.description ?? ''}`.toLowerCase();

  if (text.includes('assigned rack block') || text.includes('position marker')) {
    return false;
  }

  return location.type === 'Shop' || location.type === 'Gate';
}

function isOutlineOnly(location: Location) {
  return `${location.name} ${location.description ?? ''}`.toLowerCase().includes('outline only');
}

function createDecorationDetails(location: Location) {
  if (location.type !== 'Shop') {
    return null;
  }

  const text = `${location.name} ${location.description ?? ''}`.toLowerCase();
  const bounds = normalizedBounds(location);
  const width = Math.max(bounds.xMax - bounds.xMin, 0.1);
  const depth = Math.max(bounds.yMax - bounds.yMin, 0.1);
  const height = Math.max(bounds.zMax - bounds.zMin, 0.1);
  const centerX = bounds.xMin + width / 2;
  const centerZ = bounds.yMin + depth / 2;

  if (text.includes('tree')) {
    return createTreeDecoration(centerX, bounds.zMin, centerZ, width, height);
  }

  if (text.includes('person walking') || text.includes('person standing')) {
    return createPersonDecoration(centerX, bounds.zMin, centerZ, width, height, text.includes('walking'));
  }

  if (text.includes('animal character')) {
    return createAnimalDecoration(centerX, bounds.zMin, centerZ, width, depth, height);
  }

  return null;
}

function createTreeDecoration(x: number, baseY: number, z: number, width: number, height: number) {
  const group = new THREE.Group();
  const trunkMaterial = new THREE.MeshStandardMaterial({ color: '#8b5a2b', roughness: 0.7 });
  const leafMaterial = new THREE.MeshStandardMaterial({ color: '#16a34a', roughness: 0.75 });
  const trunkHeight = height * 0.42;
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(width * 0.12, width * 0.15, trunkHeight, 12), trunkMaterial);
  const crown = new THREE.Mesh(new THREE.ConeGeometry(width * 0.58, height * 0.76, 28), leafMaterial);

  trunk.position.set(x, baseY + trunkHeight / 2, z);
  crown.position.set(x, baseY + trunkHeight + height * 0.32, z);
  crown.castShadow = true;
  trunk.castShadow = true;
  group.add(trunk, crown);

  return group;
}

function createPersonDecoration(x: number, baseY: number, z: number, width: number, height: number, walking: boolean) {
  const group = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: '#f2c6a0', roughness: 0.58 });
  const shirt = new THREE.MeshStandardMaterial({ color: walking ? '#0ea5e9' : '#6366f1', roughness: 0.6 });
  const pants = new THREE.MeshStandardMaterial({ color: '#334155', roughness: 0.65 });
  const radius = Math.max(width * 0.18, 0.18);
  const head = new THREE.Mesh(new THREE.SphereGeometry(radius * 0.9, 18, 12), skin);
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(radius * 0.95, height * 0.28, 8, 14), shirt);
  const leftLeg = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.28, radius * 0.3, height * 0.28, 10), pants);
  const rightLeg = leftLeg.clone();
  const leftArm = new THREE.Mesh(new THREE.CylinderGeometry(radius * 0.2, radius * 0.22, height * 0.24, 10), skin);
  const rightArm = leftArm.clone();

  head.position.set(x, baseY + height * 0.82, z);
  body.position.set(x, baseY + height * 0.52, z);
  leftLeg.position.set(x - radius * 0.42, baseY + height * 0.18, z + (walking ? radius * 0.45 : 0));
  rightLeg.position.set(x + radius * 0.42, baseY + height * 0.18, z - (walking ? radius * 0.45 : 0));
  leftArm.position.set(x - radius * 1.08, baseY + height * 0.52, z - (walking ? radius * 0.34 : 0));
  rightArm.position.set(x + radius * 1.08, baseY + height * 0.52, z + (walking ? radius * 0.34 : 0));
  leftArm.rotation.z = walking ? -0.45 : -0.18;
  rightArm.rotation.z = walking ? 0.45 : 0.18;
  leftLeg.rotation.x = walking ? -0.32 : 0;
  rightLeg.rotation.x = walking ? 0.32 : 0;
  group.add(head, body, leftLeg, rightLeg, leftArm, rightArm);
  group.traverse((object) => {
    object.castShadow = true;
  });

  return group;
}

function createAnimalDecoration(x: number, baseY: number, z: number, width: number, depth: number, height: number) {
  const group = new THREE.Group();
  const bodyMaterial = new THREE.MeshStandardMaterial({ color: '#f59e0b', roughness: 0.68 });
  const darkMaterial = new THREE.MeshStandardMaterial({ color: '#78350f', roughness: 0.7 });
  const body = new THREE.Mesh(new THREE.SphereGeometry(Math.max(width, depth) * 0.26, 22, 14), bodyMaterial);
  const head = new THREE.Mesh(new THREE.SphereGeometry(Math.max(width, depth) * 0.17, 18, 12), bodyMaterial);
  const leftEar = new THREE.Mesh(new THREE.ConeGeometry(width * 0.08, height * 0.22, 12), darkMaterial);
  const rightEar = leftEar.clone();
  const tail = new THREE.Mesh(new THREE.ConeGeometry(width * 0.07, width * 0.32, 12), darkMaterial);

  body.scale.z = Math.max(depth / width, 0.72);
  body.position.set(x, baseY + height * 0.46, z);
  head.position.set(x, baseY + height * 0.66, z - depth * 0.26);
  leftEar.position.set(x - width * 0.11, baseY + height * 0.86, z - depth * 0.29);
  rightEar.position.set(x + width * 0.11, baseY + height * 0.86, z - depth * 0.29);
  tail.position.set(x, baseY + height * 0.55, z + depth * 0.34);
  tail.rotation.x = Math.PI / 2;
  group.add(body, head, leftEar, rightEar, tail);

  for (const offsetX of [-0.18, 0.18]) {
    for (const offsetZ of [-0.1, 0.16]) {
      const leg = new THREE.Mesh(new THREE.CylinderGeometry(width * 0.045, width * 0.05, height * 0.28, 10), darkMaterial);
      leg.position.set(x + width * offsetX, baseY + height * 0.16, z + depth * offsetZ);
      group.add(leg);
    }
  }

  group.traverse((object) => {
    object.castShadow = true;
  });

  return group;
}

function createWarehouseActivityLayer(locations: Location[], bounds: ReturnType<typeof getPlanBounds> & {}) {
  const group = new THREE.Group();
  const fallbackArea = { xMin: bounds.xMin, xMax: bounds.xMax, yMin: bounds.yMin, yMax: bounds.yMax };
  const receivingArea = findActivityArea(locations, ['receiving', 'dock', 'loading'], ['Dock', 'Work Area', 'Operation Area']) ?? fallbackArea;
  const leftStorageArea = findActivityArea(locations, ['left storage', 'zone b', 'storage'], ['Rack', 'Shelf', 'Layout Zone']) ?? fallbackArea;
  const rightStorageArea = findActivityArea(locations, ['right storage', 'zone c', 'storage'], ['Rack', 'Shelf', 'Layout Zone']) ?? fallbackArea;
  const aisleArea = findActivityArea(locations, ['main horizontal way', 'main aisle', 'way', 'aisle'], ['Path', 'Main Aisle']) ?? fallbackArea;
  const officeArea = findActivityArea(locations, ['office', 'open zone', 'planning'], ['Office', 'Layout Zone']) ?? fallbackArea;

  const walkingWorker = pointInArea(aisleArea, 0.22, 0.48);
  const carryingWorker = pointInArea(rightStorageArea, 0.38, 0.32);
  const stackingWorker = pointInArea(leftStorageArea, 0.58, 0.56);
  const forkliftSpot = pointInArea(receivingArea, 0.7, 0.55);
  const leftForkliftSpot = pointInArea(leftStorageArea, 0.22, 0.78);
  const rightForkliftSpot = pointInArea(rightStorageArea, 0.72, 0.62);
  const deskSpot = pointInArea(officeArea, 0.72, 0.42);
  const workerHeight = 3.65;
  const deskOffset = Math.min(areaWidth(officeArea) * 0.04, 1.2);
  const deskScale = 2.05;

  group.add(createWorker(walkingWorker.x, walkingWorker.z, workerHeight, 0.55, 'pointing'));
  group.add(createWorker(carryingWorker.x, carryingWorker.z, workerHeight, -0.65, 'carrying'));
  group.add(createWorker(stackingWorker.x, stackingWorker.z, workerHeight, 0.35, 'stacking'));
  group.add(createWorker(forkliftSpot.x - areaWidth(receivingArea) * 0.14, forkliftSpot.z + areaDepth(receivingArea) * 0.1, workerHeight, 1.1, 'clipboard'));
  group.add(createWorker(deskSpot.x + deskOffset - 0.58 * deskScale, deskSpot.z + 0.14 * deskScale, 3.1, -0.2, 'sitting'));

  group.add(createHandTruck(carryingWorker.x + areaWidth(rightStorageArea) * 0.12, carryingWorker.z + areaDepth(rightStorageArea) * 0.1, 2.05));
  group.add(createBoxStack(stackingWorker.x + areaWidth(leftStorageArea) * 0.12, stackingWorker.z - areaDepth(leftStorageArea) * 0.05, 2.15, 3));
  group.add(createForklift(forkliftSpot.x + areaWidth(receivingArea) * 0.08, forkliftSpot.z, 2.65, -0.22));
  group.add(createForklift(leftForkliftSpot.x, leftForkliftSpot.z, 2.15, 0.85));
  group.add(createForklift(rightForkliftSpot.x, rightForkliftSpot.z, 2.15, -0.7));
  group.add(createBoxStack(forkliftSpot.x - areaWidth(receivingArea) * 0.08, forkliftSpot.z - areaDepth(receivingArea) * 0.16, 1.8, 2));
  group.add(createDeskStation(deskSpot.x + deskOffset, deskSpot.z, deskScale));

  group.traverse((object) => {
    object.castShadow = true;
    object.receiveShadow = true;
  });

  return group;
}

function findActivityArea(locations: Location[], keywords: string[], fallbackTypes: LocationType[]) {
  const byKeyword = locations.find((location) => {
    const text = `${location.name} ${location.description ?? ''}`.toLowerCase();

    return keywords.some((keyword) => text.includes(keyword));
  });

  if (byKeyword) {
    return normalizedBounds(byKeyword);
  }

  const byType = locations.find((location) => fallbackTypes.includes(location.type));

  return byType ? normalizedBounds(byType) : null;
}

function pointInArea(area: Pick<ReturnType<typeof normalizedBounds>, 'xMin' | 'xMax' | 'yMin' | 'yMax'>, xRatio: number, yRatio: number) {
  const insetX = Math.min(areaWidth(area) * 0.18, 5);
  const insetY = Math.min(areaDepth(area) * 0.18, 5);
  const xMin = area.xMin + insetX;
  const xMax = area.xMax - insetX;
  const yMin = area.yMin + insetY;
  const yMax = area.yMax - insetY;

  return {
    x: xMin + (xMax - xMin) * xRatio,
    z: yMin + (yMax - yMin) * yRatio
  };
}

function areaWidth(area: Pick<ReturnType<typeof normalizedBounds>, 'xMin' | 'xMax'>) {
  return Math.max(area.xMax - area.xMin, 1);
}

function areaDepth(area: Pick<ReturnType<typeof normalizedBounds>, 'yMin' | 'yMax'>) {
  return Math.max(area.yMax - area.yMin, 1);
}

function createWorker(x: number, z: number, height: number, rotationY: number, pose: WorkerPose) {
  const group = new THREE.Group();
  const skin = new THREE.MeshStandardMaterial({ color: pose === 'carrying' ? '#8f5a3f' : '#ffb18f', roughness: 0.58 });
  const hardHat = new THREE.MeshStandardMaterial({ color: '#fbbf24', roughness: 0.5 });
  const shirt = new THREE.MeshStandardMaterial({ color: pose === 'pointing' ? '#f8fafc' : '#fbbf24', roughness: 0.62 });
  const overalls = new THREE.MeshStandardMaterial({ color: '#256d8f', roughness: 0.68 });
  const pants = new THREE.MeshStandardMaterial({ color: '#2f7ea3', roughness: 0.68 });
  const vest = new THREE.MeshStandardMaterial({ color: '#1f6f8b', roughness: 0.58 });
  const shoeMaterial = new THREE.MeshStandardMaterial({ color: '#111827', roughness: 0.7 });
  const hairMaterial = new THREE.MeshStandardMaterial({ color: pose === 'clipboard' ? '#111827' : '#8b4c2b', roughness: 0.72 });
  const faceMaterial = new THREE.MeshStandardMaterial({ color: '#111827', roughness: 0.7 });
  const scale = height / 1.8;
  const baseY = pose === 'sitting' ? 0.48 * scale : 0;
  const bodyHeight = pose === 'sitting' ? 0.58 * scale : 0.78 * scale;
  const legHeight = pose === 'sitting' ? 0.42 * scale : 0.72 * scale;
  const headRadius = 0.18 * scale;
  const neck = new THREE.Mesh(new THREE.CylinderGeometry(0.075 * scale, 0.085 * scale, 0.14 * scale, 12), skin);
  const body = new THREE.Mesh(new THREE.CapsuleGeometry(0.22 * scale, bodyHeight, 8, 18), shirt);
  const bib = new THREE.Mesh(new THREE.BoxGeometry(0.38 * scale, 0.48 * scale, 0.27 * scale), overalls);
  const vestLeft = new THREE.Mesh(new THREE.BoxGeometry(0.075 * scale, 0.58 * scale, 0.3 * scale), vest);
  const vestRight = vestLeft.clone();
  const head = new THREE.Mesh(new THREE.SphereGeometry(headRadius, 18, 12), skin);
  const helmet = new THREE.Mesh(new THREE.SphereGeometry(headRadius * 1.06, 18, 8, 0, Math.PI * 2, 0, Math.PI * 0.52), hardHat);
  const helmetBrim = new THREE.Mesh(new THREE.BoxGeometry(0.34 * scale, 0.035 * scale, 0.18 * scale), hardHat);
  const hair = new THREE.Mesh(new THREE.SphereGeometry(headRadius * 0.94, 16, 8, 0, Math.PI * 2, Math.PI * 0.42, Math.PI * 0.45), hairMaterial);
  const nose = new THREE.Mesh(new THREE.SphereGeometry(headRadius * 0.18, 10, 8), skin);
  const leftEye = new THREE.Mesh(new THREE.SphereGeometry(headRadius * 0.045, 8, 6), faceMaterial);
  const rightEye = leftEye.clone();

  body.position.y = baseY + legHeight + bodyHeight * 0.5;
  bib.position.set(0, body.position.y + 0.03 * scale, -0.04 * scale);
  vestLeft.position.set(-0.15 * scale, body.position.y + 0.04 * scale, -0.07 * scale);
  vestRight.position.set(0.15 * scale, body.position.y + 0.04 * scale, -0.07 * scale);
  neck.position.y = baseY + legHeight + bodyHeight + 0.03 * scale;
  head.position.y = baseY + legHeight + bodyHeight + headRadius * 1.7;
  helmet.position.copy(head.position);
  helmet.position.y += headRadius * 0.08;
  helmetBrim.position.set(0, head.position.y + headRadius * 0.42, -headRadius * 0.88);
  hair.position.copy(head.position);
  hair.position.y -= headRadius * 0.08;
  nose.position.set(0, head.position.y - headRadius * 0.02, -headRadius * 0.9);
  leftEye.position.set(-headRadius * 0.35, head.position.y + headRadius * 0.12, -headRadius * 0.88);
  rightEye.position.set(headRadius * 0.35, head.position.y + headRadius * 0.12, -headRadius * 0.88);

  group.add(body, bib, vestLeft, vestRight, neck, head, hair, helmet, helmetBrim, nose, leftEye, rightEye);
  addWorkerLimbs(group, skin, shirt, pants, shoeMaterial, scale, pose);

  if (pose === 'carrying') {
    const box = createCardboardBox(0, baseY + legHeight + bodyHeight * 0.42, -0.48 * scale, 0.6 * scale, 0.48 * scale, 0.52 * scale);
    group.add(box);
  }

  if (pose === 'stacking') {
    const box = createCardboardBox(0.2 * scale, baseY + legHeight + bodyHeight * 0.78, -0.34 * scale, 0.58 * scale, 0.46 * scale, 0.52 * scale);
    group.add(box);
  }

  if (pose === 'clipboard') {
    const clipboardMaterial = new THREE.MeshStandardMaterial({ color: '#1e1b4b', roughness: 0.62 });
    const clipboard = new THREE.Mesh(new THREE.BoxGeometry(0.34 * scale, 0.48 * scale, 0.035 * scale), clipboardMaterial);
    clipboard.position.set(0.36 * scale, baseY + legHeight + bodyHeight * 0.52, -0.28 * scale);
    clipboard.rotation.z = -0.24;
    group.add(clipboard);

    const beard = new THREE.Mesh(new THREE.SphereGeometry(headRadius * 0.42, 14, 8), faceMaterial);
    beard.scale.set(0.88, 0.52, 0.42);
    beard.position.set(0, head.position.y - headRadius * 0.42, -headRadius * 0.72);
    group.add(beard);
  }

  group.position.set(x, 0.08, z);
  group.rotation.y = rotationY;

  return group;
}

function addWorkerLimbs(
  group: THREE.Group,
  skin: THREE.Material,
  sleeveMaterial: THREE.Material,
  pants: THREE.Material,
  shoeMaterial: THREE.Material,
  scale: number,
  pose: WorkerPose
) {
  const legY = pose === 'sitting' ? 0.58 * scale : 0.38 * scale;
  const leftLeg = new THREE.Mesh(new THREE.CylinderGeometry(0.065 * scale, 0.075 * scale, 0.74 * scale, 10), pants);
  const rightLeg = leftLeg.clone();
  const leftArm = new THREE.Mesh(new THREE.CylinderGeometry(0.055 * scale, 0.062 * scale, 0.66 * scale, 10), sleeveMaterial);
  const rightArm = leftArm.clone();
  const leftHand = new THREE.Mesh(new THREE.SphereGeometry(0.065 * scale, 12, 8), skin);
  const rightHand = leftHand.clone();
  const leftShoe = new THREE.Mesh(new THREE.BoxGeometry(0.2 * scale, 0.08 * scale, 0.28 * scale), shoeMaterial);
  const rightShoe = leftShoe.clone();

  leftLeg.position.set(-0.12 * scale, legY, pose === 'pointing' ? 0.12 * scale : 0);
  rightLeg.position.set(0.12 * scale, legY, pose === 'pointing' ? -0.12 * scale : 0);
  leftShoe.position.set(-0.12 * scale, 0.06 * scale, pose === 'pointing' ? 0.26 * scale : 0.06 * scale);
  rightShoe.position.set(0.12 * scale, 0.06 * scale, pose === 'pointing' ? -0.26 * scale : 0.06 * scale);
  leftArm.position.set(-0.34 * scale, 1.24 * scale, 0);
  rightArm.position.set(0.34 * scale, 1.24 * scale, 0);
  leftHand.position.set(-0.36 * scale, 0.94 * scale, 0);
  rightHand.position.set(0.36 * scale, 0.94 * scale, 0);

  if (pose === 'pointing') {
    leftLeg.rotation.x = -0.35;
    rightLeg.rotation.x = 0.35;
    leftArm.position.set(-0.34 * scale, 1.05 * scale, 0.08 * scale);
    leftArm.rotation.x = 0.72;
    leftArm.rotation.z = -0.2;
    rightArm.position.set(0.44 * scale, 1.46 * scale, -0.28 * scale);
    rightArm.rotation.x = Math.PI / 2.2;
    rightArm.rotation.z = -0.95;
    leftHand.position.set(-0.38 * scale, 0.78 * scale, -0.18 * scale);
    rightHand.position.set(0.82 * scale, 1.72 * scale, -0.58 * scale);
  } else if (pose === 'carrying') {
    leftArm.position.set(-0.26 * scale, 1.15 * scale, -0.22 * scale);
    rightArm.position.set(0.26 * scale, 1.15 * scale, -0.22 * scale);
    leftArm.rotation.x = Math.PI / 2.8;
    rightArm.rotation.x = Math.PI / 2.8;
    leftHand.position.set(-0.23 * scale, 1.07 * scale, -0.48 * scale);
    rightHand.position.set(0.23 * scale, 1.07 * scale, -0.48 * scale);
  } else if (pose === 'stacking') {
    leftArm.position.set(-0.22 * scale, 1.42 * scale, -0.16 * scale);
    rightArm.position.set(0.22 * scale, 1.42 * scale, -0.16 * scale);
    leftArm.rotation.x = Math.PI / 2.9;
    rightArm.rotation.x = Math.PI / 2.9;
    leftArm.rotation.z = -0.45;
    rightArm.rotation.z = 0.45;
    leftHand.position.set(-0.36 * scale, 1.44 * scale, -0.48 * scale);
    rightHand.position.set(0.36 * scale, 1.44 * scale, -0.48 * scale);
  } else if (pose === 'sitting') {
    leftLeg.position.set(-0.13 * scale, 0.5 * scale, -0.12 * scale);
    rightLeg.position.set(0.13 * scale, 0.5 * scale, -0.12 * scale);
    leftShoe.position.set(-0.14 * scale, 0.42 * scale, -0.5 * scale);
    rightShoe.position.set(0.14 * scale, 0.42 * scale, -0.5 * scale);
    leftLeg.rotation.x = Math.PI / 2.3;
    rightLeg.rotation.x = Math.PI / 2.3;
    leftArm.position.set(-0.24 * scale, 1.18 * scale, -0.18 * scale);
    rightArm.position.set(0.24 * scale, 1.18 * scale, -0.18 * scale);
    leftArm.rotation.x = Math.PI / 2.7;
    rightArm.rotation.x = Math.PI / 2.7;
    leftHand.position.set(-0.24 * scale, 1.03 * scale, -0.55 * scale);
    rightHand.position.set(0.24 * scale, 1.03 * scale, -0.55 * scale);
  } else if (pose === 'clipboard') {
    leftArm.position.set(-0.42 * scale, 1.5 * scale, -0.14 * scale);
    leftArm.rotation.x = Math.PI / 2.25;
    leftArm.rotation.z = 0.95;
    rightArm.position.set(0.28 * scale, 1.18 * scale, -0.18 * scale);
    rightArm.rotation.x = Math.PI / 2.75;
    rightArm.rotation.z = -0.35;
    leftHand.position.set(-0.86 * scale, 1.76 * scale, -0.44 * scale);
    rightHand.position.set(0.4 * scale, 1.02 * scale, -0.46 * scale);
  } else {
    leftArm.rotation.z = -0.2;
    rightArm.rotation.z = 0.2;
  }

  group.add(leftLeg, rightLeg, leftArm, rightArm, leftHand, rightHand, leftShoe, rightShoe);
}

function createCardboardBox(x: number, y: number, z: number, width: number, height: number, depth: number) {
  const material = new THREE.MeshStandardMaterial({ color: '#e99a4f', roughness: 0.72 });
  const tapeMaterial = new THREE.MeshStandardMaterial({ color: '#c87932', roughness: 0.72 });
  const edgeMaterial = new THREE.LineBasicMaterial({ color: '#9a5b17', transparent: true, opacity: 0.65 });
  const box = new THREE.Mesh(new THREE.BoxGeometry(width, height, depth), material);
  const frontTape = new THREE.Mesh(new THREE.BoxGeometry(width * 0.08, height * 0.92, 0.018), tapeMaterial);
  const topTape = new THREE.Mesh(new THREE.BoxGeometry(width * 0.08, 0.018, depth * 0.92), tapeMaterial);
  const label = new THREE.Mesh(new THREE.BoxGeometry(width * 0.22, height * 0.12, 0.012), new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.75 }));
  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(box.geometry), edgeMaterial);
  const group = new THREE.Group();

  box.position.set(x, y, z);
  frontTape.position.set(x, y, z - depth * 0.51);
  topTape.position.set(x, y + height * 0.51, z);
  label.position.set(x + width * 0.25, y - height * 0.12, z - depth * 0.515);
  edges.position.copy(box.position);
  group.add(box, frontTape, topTape, label, edges);

  return group;
}

function createBoxStack(x: number, z: number, scale: number, levels: number) {
  const group = new THREE.Group();
  const boxSize = 0.64 * scale;

  for (let level = 0; level < levels; level += 1) {
    const count = Math.max(1, levels - level);
    for (let index = 0; index < count; index += 1) {
      group.add(createCardboardBox((index - (count - 1) / 2) * boxSize, boxSize * (level + 0.5), 0, boxSize, boxSize, boxSize));
    }
  }

  group.position.set(x, 0.08, z);

  return group;
}

function createHandTruck(x: number, z: number, scale: number) {
  const group = new THREE.Group();
  const metal = new THREE.MeshStandardMaterial({ color: '#334155', roughness: 0.56, metalness: 0.2 });
  const wheel = new THREE.MeshStandardMaterial({ color: '#111827', roughness: 0.75 });
  const frame = new THREE.Mesh(new THREE.BoxGeometry(0.08 * scale, 1.35 * scale, 0.08 * scale), metal);
  const axle = new THREE.Mesh(new THREE.BoxGeometry(0.82 * scale, 0.08 * scale, 0.08 * scale), metal);
  const platform = new THREE.Mesh(new THREE.BoxGeometry(0.82 * scale, 0.08 * scale, 0.44 * scale), metal);

  frame.position.set(0, 0.78 * scale, 0);
  frame.rotation.z = -0.18;
  axle.position.set(0, 0.18 * scale, 0.08 * scale);
  platform.position.set(0, 0.16 * scale, -0.22 * scale);
  group.add(frame, axle, platform);
  group.add(createCardboardBox(0, 0.54 * scale, -0.15 * scale, 0.78 * scale, 0.56 * scale, 0.55 * scale));

  for (const side of [-1, 1]) {
    const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.13 * scale, 0.13 * scale, 0.09 * scale, 18), wheel);
    tire.position.set(side * 0.46 * scale, 0.16 * scale, 0.12 * scale);
    tire.rotation.z = Math.PI / 2;
    group.add(tire);
  }

  group.position.set(x, 0.08, z);
  group.rotation.y = -0.45;

  return group;
}

function createForklift(x: number, z: number, scale: number, rotationY: number) {
  const group = new THREE.Group();
  const yellow = new THREE.MeshStandardMaterial({ color: '#f6b21a', roughness: 0.56 });
  const dark = new THREE.MeshStandardMaterial({ color: '#1f2937', roughness: 0.62, metalness: 0.12 });
  const glass = new THREE.MeshStandardMaterial({ color: '#93c5fd', roughness: 0.25, transparent: true, opacity: 0.58 });
  const body = new THREE.Mesh(new THREE.BoxGeometry(1.9 * scale, 0.72 * scale, 1.12 * scale), yellow);
  const frontHood = new THREE.Mesh(new THREE.BoxGeometry(0.9 * scale, 0.42 * scale, 1.02 * scale), yellow);
  const cabin = new THREE.Mesh(new THREE.BoxGeometry(0.82 * scale, 0.86 * scale, 0.92 * scale), yellow);
  const window = new THREE.Mesh(new THREE.BoxGeometry(0.5 * scale, 0.52 * scale, 0.96 * scale), glass);
  const roof = new THREE.Mesh(new THREE.BoxGeometry(0.92 * scale, 0.1 * scale, 1 * scale), dark);
  const seat = new THREE.Mesh(new THREE.BoxGeometry(0.34 * scale, 0.32 * scale, 0.42 * scale), dark);
  const steeringWheel = new THREE.Mesh(new THREE.TorusGeometry(0.14 * scale, 0.025 * scale, 8, 18), dark);
  const mast = new THREE.Mesh(new THREE.BoxGeometry(0.14 * scale, 1.8 * scale, 1.12 * scale), dark);
  const mastRail = new THREE.Mesh(new THREE.BoxGeometry(0.09 * scale, 1.62 * scale, 0.09 * scale), dark);
  const forkLeft = new THREE.Mesh(new THREE.BoxGeometry(1.55 * scale, 0.06 * scale, 0.08 * scale), dark);
  const forkRight = forkLeft.clone();

  body.position.set(0, 0.42 * scale, 0);
  frontHood.position.set(0.74 * scale, 0.78 * scale, 0);
  cabin.position.set(-0.34 * scale, 1.06 * scale, 0);
  window.position.set(-0.5 * scale, 1.1 * scale, 0);
  roof.position.set(-0.34 * scale, 1.58 * scale, 0);
  seat.position.set(-0.44 * scale, 0.78 * scale, 0);
  steeringWheel.position.set(0.08 * scale, 1.08 * scale, -0.18 * scale);
  steeringWheel.rotation.x = Math.PI / 2.8;
  mast.position.set(1.08 * scale, 1.02 * scale, 0);
  mastRail.position.set(1.22 * scale, 1.08 * scale, -0.46 * scale);
  const mastRailRight = mastRail.clone();
  mastRailRight.position.z = 0.46 * scale;
  forkLeft.position.set(1.88 * scale, 0.18 * scale, -0.34 * scale);
  forkRight.position.set(1.88 * scale, 0.18 * scale, 0.34 * scale);
  group.add(body, frontHood, cabin, window, roof, seat, steeringWheel, mast, mastRail, mastRailRight, forkLeft, forkRight);

  for (const postZ of [-0.42, 0.42]) {
    for (const postX of [-0.68, 0.02]) {
      const post = new THREE.Mesh(new THREE.BoxGeometry(0.08 * scale, 1.28 * scale, 0.08 * scale), dark);
      post.position.set(postX * scale, 1.02 * scale, postZ * scale);
      group.add(post);
    }
  }

  for (const wheelX of [-0.56, 0.55]) {
    for (const wheelZ of [-0.5, 0.5]) {
      const tire = new THREE.Mesh(new THREE.CylinderGeometry(0.26 * scale, 0.26 * scale, 0.18 * scale, 22), dark);
      const hub = new THREE.Mesh(new THREE.CylinderGeometry(0.12 * scale, 0.12 * scale, 0.19 * scale, 16), new THREE.MeshStandardMaterial({ color: '#475569', roughness: 0.58 }));
      tire.position.set(wheelX * scale, 0.16 * scale, wheelZ * scale);
      hub.position.copy(tire.position);
      tire.rotation.x = Math.PI / 2;
      hub.rotation.x = Math.PI / 2;
      group.add(tire, hub);
    }
  }

  group.position.set(x, 0.08, z);
  group.rotation.y = rotationY;

  return group;
}

function createDeskStation(x: number, z: number, scale: number) {
  const group = new THREE.Group();
  const wood = new THREE.MeshStandardMaterial({ color: '#b7791f', roughness: 0.66 });
  const dark = new THREE.MeshStandardMaterial({ color: '#334155', roughness: 0.62 });
  const paperMaterial = new THREE.MeshStandardMaterial({ color: '#f8fafc', roughness: 0.78 });
  const screen = new THREE.MeshStandardMaterial({ color: '#60a5fa', roughness: 0.35, emissive: '#1d4ed8', emissiveIntensity: 0.16 });
  const table = new THREE.Mesh(new THREE.BoxGeometry(1.55 * scale, 0.12 * scale, 0.86 * scale), wood);
  const monitor = new THREE.Mesh(new THREE.BoxGeometry(0.52 * scale, 0.36 * scale, 0.05 * scale), screen);
  const monitorStand = new THREE.Mesh(new THREE.BoxGeometry(0.08 * scale, 0.22 * scale, 0.08 * scale), dark);
  const chair = new THREE.Mesh(new THREE.BoxGeometry(0.48 * scale, 0.2 * scale, 0.48 * scale), dark);
  const chairBack = new THREE.Mesh(new THREE.BoxGeometry(0.5 * scale, 0.58 * scale, 0.08 * scale), dark);
  const paper = new THREE.Mesh(new THREE.BoxGeometry(0.38 * scale, 0.012 * scale, 0.28 * scale), paperMaterial);

  table.position.set(0, 0.58 * scale, 0);
  monitor.position.set(0.12 * scale, 0.93 * scale, -0.28 * scale);
  monitorStand.position.set(0.12 * scale, 0.72 * scale, -0.24 * scale);
  chair.position.set(-0.58 * scale, 0.28 * scale, 0.14 * scale);
  chairBack.position.set(-0.7 * scale, 0.56 * scale, 0.35 * scale);
  paper.position.set(0.48 * scale, 0.65 * scale, 0.12 * scale);
  group.add(table, monitor, monitorStand, chair, chairBack, paper);

  for (const xOffset of [-0.5, 0.5]) {
    for (const zOffset of [-0.26, 0.26]) {
      const leg = new THREE.Mesh(new THREE.BoxGeometry(0.08 * scale, 0.56 * scale, 0.08 * scale), wood);
      leg.position.set(xOffset * scale, 0.29 * scale, zOffset * scale);
      group.add(leg);
    }
  }

  group.position.set(x, 0.08, z);
  group.rotation.y = -0.2;

  return group;
}

function createPlanGrid(bounds: ReturnType<typeof getPlanBounds> & {}) {
  const group = new THREE.Group();
  const material = new THREE.LineBasicMaterial({
    color: '#d8dee6',
    transparent: true,
    opacity: 0.55,
    depthTest: true,
    depthWrite: false,
    fog: false
  });
  const step = niceGridStep(Math.max(bounds.xMax - bounds.xMin, bounds.yMax - bounds.yMin));
  const xStart = Math.floor(bounds.xMin / step) * step;
  const xEnd = Math.ceil(bounds.xMax / step) * step;
  const yStart = Math.floor(bounds.yMin / step) * step;
  const yEnd = Math.ceil(bounds.yMax / step) * step;
  const points: THREE.Vector3[] = [];
  const z = 0.18;

  for (let x = xStart; x <= xEnd; x += step) {
    points.push(new THREE.Vector3(x, z, yStart), new THREE.Vector3(x, z, yEnd));
  }

  for (let y = yStart; y <= yEnd; y += step) {
    points.push(new THREE.Vector3(xStart, z, y), new THREE.Vector3(xEnd, z, y));
  }

  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const grid = new THREE.LineSegments(geometry, material);
  grid.renderOrder = 30;
  group.add(grid);

  return group;
}

function createDimensionLayer(locations: Location[], bounds: ReturnType<typeof getPlanBounds> & {}) {
  const group = new THREE.Group();
  const boundary = locations.find((location) => location.type === 'Boundary') ?? locations[0];
  const boundaryBounds = boundary ? normalizedBounds(boundary) : bounds;

  group.add(createRectangleOutline(boundaryBounds, '#111827', 0.32, 0.28));
  group.add(createDimensionLine(boundaryBounds.xMin, boundaryBounds.yMax + 2.2, boundaryBounds.xMax, boundaryBounds.yMax + 2.2, '#475569'));
  group.add(
    createDimensionLabel(
      `${formatMeters(boundaryBounds.xMax - boundaryBounds.xMin)} m`,
      (boundaryBounds.xMin + boundaryBounds.xMax) / 2,
      boundaryBounds.yMax + 4.4,
      '#475569'
    )
  );
  group.add(createDimensionLine(boundaryBounds.xMin - 2.2, boundaryBounds.yMin, boundaryBounds.xMin - 2.2, boundaryBounds.yMax, '#475569'));
  group.add(
    createDimensionLabel(
      `${formatMeters(boundaryBounds.yMax - boundaryBounds.yMin)} m`,
      boundaryBounds.xMin - 4.8,
      (boundaryBounds.yMin + boundaryBounds.yMax) / 2,
      '#475569',
      true
    )
  );

  locations
    .filter((location) => location.type === 'Layout Zone' || location.type === 'Path')
    .forEach((location, index) => {
      const color = dimensionColors[(index + 1) % dimensionColors.length];
      const zoneBounds = normalizedBounds(location);
      const width = zoneBounds.xMax - zoneBounds.xMin;
      const depth = zoneBounds.yMax - zoneBounds.yMin;

      group.add(createRectangleOutline(zoneBounds, color, 0.36, 0.16));

      if (width >= 3) {
        group.add(createDimensionLine(zoneBounds.xMin, zoneBounds.yMin - 0.8, zoneBounds.xMax, zoneBounds.yMin - 0.8, color));
        group.add(createDimensionLabel(`${formatMeters(width)} m`, (zoneBounds.xMin + zoneBounds.xMax) / 2, zoneBounds.yMin - 2, color));
      }

      if (depth >= 3) {
        group.add(createDimensionLine(zoneBounds.xMin - 0.8, zoneBounds.yMin, zoneBounds.xMin - 0.8, zoneBounds.yMax, color));
        group.add(createDimensionLabel(`${formatMeters(depth)} m`, zoneBounds.xMin - 2.2, (zoneBounds.yMin + zoneBounds.yMax) / 2, color, true));
      }
    });

  locations
    .filter(isOutlineOnly)
    .forEach((location) => {
      group.add(createDashedRectangleOutline(normalizedBounds(location), colorForLocation(location), 0.5));
    });

  return group;
}

function createDashedRectangleOutline(
  bounds: Pick<ReturnType<typeof normalizedBounds>, 'xMin' | 'xMax' | 'yMin' | 'yMax'>,
  color: string,
  z: number
) {
  const points = [
    new THREE.Vector3(bounds.xMin, z, bounds.yMin),
    new THREE.Vector3(bounds.xMax, z, bounds.yMin),
    new THREE.Vector3(bounds.xMax, z, bounds.yMax),
    new THREE.Vector3(bounds.xMin, z, bounds.yMax),
    new THREE.Vector3(bounds.xMin, z, bounds.yMin)
  ];
  const geometry = new THREE.BufferGeometry().setFromPoints(points);
  const material = new THREE.LineDashedMaterial({
    color,
    dashSize: 1.2,
    gapSize: 0.65,
    depthTest: true,
    depthWrite: false
  });
  const outline = new THREE.Line(geometry, material);

  outline.computeLineDistances();
  outline.renderOrder = 36;

  return outline;
}

function createRectangleOutline(
  bounds: Pick<ReturnType<typeof normalizedBounds>, 'xMin' | 'xMax' | 'yMin' | 'yMax'>,
  color: string,
  z: number,
  thickness = 0.16
) {
  const group = new THREE.Group();

  group.add(createFlatStrip(bounds.xMin, bounds.yMin, bounds.xMax, bounds.yMin, color, z, thickness));
  group.add(createFlatStrip(bounds.xMax, bounds.yMin, bounds.xMax, bounds.yMax, color, z, thickness));
  group.add(createFlatStrip(bounds.xMax, bounds.yMax, bounds.xMin, bounds.yMax, color, z, thickness));
  group.add(createFlatStrip(bounds.xMin, bounds.yMax, bounds.xMin, bounds.yMin, color, z, thickness));

  return group;
}

function createDimensionLine(x1: number, y1: number, x2: number, y2: number, color: string) {
  const z = 0.42;
  const tickSize = 1.2;
  const horizontal = Math.abs(x2 - x1) >= Math.abs(y2 - y1);
  const group = new THREE.Group();
  const thickness = 0.12;

  group.add(createFlatStrip(x1, y1, x2, y2, color, z, thickness));
  group.add(
    horizontal
      ? createFlatStrip(x1, y1 - tickSize, x1, y1 + tickSize, color, z, thickness)
      : createFlatStrip(x1 - tickSize, y1, x1 + tickSize, y1, color, z, thickness)
  );
  group.add(
    horizontal
      ? createFlatStrip(x2, y2 - tickSize, x2, y2 + tickSize, color, z, thickness)
      : createFlatStrip(x2 - tickSize, y2, x2 + tickSize, y2, color, z, thickness)
  );

  return group;
}

function createFlatStrip(x1: number, y1: number, x2: number, y2: number, color: string, z: number, thickness: number) {
  const length = Math.max(Math.hypot(x2 - x1, y2 - y1), 0.01);
  const geometry = new THREE.BoxGeometry(length, 0.025, thickness);
  const material = new THREE.MeshBasicMaterial({
    color,
    depthTest: true,
    depthWrite: false,
    fog: false,
    polygonOffset: true,
    polygonOffsetFactor: -1,
    polygonOffsetUnits: -1
  });
  const mesh = new THREE.Mesh(geometry, material);

  mesh.position.set((x1 + x2) / 2, z, (y1 + y2) / 2);
  mesh.rotation.y = -Math.atan2(y2 - y1, x2 - x1);
  mesh.renderOrder = 35;

  return mesh;
}

function createDimensionLabel(label: string, x: number, y: number, color: string, vertical = false) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');

  canvas.width = 256;
  canvas.height = 96;

  if (context) {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.translate(canvas.width / 2, canvas.height / 2);

    if (vertical) {
      context.rotate(-Math.PI / 2);
    }

    context.font = '800 26px Inter, system-ui, sans-serif';
    const textWidth = context.measureText(label).width;
    const boxWidth = Math.ceil(textWidth + 28);

    context.fillStyle = 'rgba(255, 255, 255, 0.9)';
    roundRect(context, -boxWidth / 2, -22, boxWidth, 44, 8);
    context.fill();
    context.fillStyle = color;
    context.textAlign = 'center';
    context.textBaseline = 'middle';
    context.fillText(label, 0, 1);
  }

  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(material);

  sprite.position.set(x, 0.62, y);
  sprite.scale.set(8, 3, 1);
  sprite.renderOrder = 20;

  return sprite;
}

function createLocationEdges(location: Location) {
  const bounds = normalizedBounds(location);
  const width = Math.max(bounds.xMax - bounds.xMin, 0.1);
  const depth = Math.max(bounds.yMax - bounds.yMin, 0.1);
  const height = Math.max(bounds.zMax - bounds.zMin, 0.1);
  const geometry = new THREE.EdgesGeometry(createLocationGeometry(location, width, height, depth));
  const material = new THREE.LineBasicMaterial({
    color: edgeColorForLocation(location),
    transparent: true,
    opacity: location.type === 'Shop' ? 0.82 : 1,
    fog: false
  });
  const edges = new THREE.LineSegments(geometry, material);

  edges.position.set(
    bounds.xMin + width / 2,
    bounds.zMin + height / 2,
    bounds.yMin + depth / 2
  );
  edges.renderOrder = 6;

  return edges;
}

function createLocationLabel(location: Location) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const label = labelForLocation(location);
  const fontSize = 28;
  const paddingX = 18;
  const paddingY = 10;

  canvas.width = 512;
  canvas.height = 128;

  if (context) {
    context.font = `700 ${fontSize}px Inter, system-ui, sans-serif`;
    const textWidth = Math.min(context.measureText(label).width, canvas.width - paddingX * 2);
    const boxWidth = Math.ceil(textWidth + paddingX * 2);

    context.fillStyle = 'rgba(255, 255, 255, 0.88)';
    context.strokeStyle = 'rgba(15, 23, 42, 0.22)';
    context.lineWidth = 2;
    roundRect(context, 0, 0, boxWidth, fontSize + paddingY * 2, 8);
    context.fill();
    context.stroke();
    context.fillStyle = '#17202a';
    context.textBaseline = 'middle';
    context.fillText(label, paddingX, fontSize / 2 + paddingY, canvas.width - paddingX * 2);
  }

  const bounds = normalizedBounds(location);
  const width = Math.max(bounds.xMax - bounds.xMin, 0.1);
  const depth = Math.max(bounds.yMax - bounds.yMin, 0.1);
  const height = Math.max(bounds.zMax - bounds.zMin, 0.1);
  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: true,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(material);

  sprite.position.set(
    bounds.xMin + width / 2,
    bounds.zMin + height + 0.28,
    bounds.yMin + depth / 2
  );
  sprite.scale.set(Math.min(Math.max(width, depth, 1.8), 6), Math.min(Math.max(width, depth, 1.8), 6) / 4, 1);
  sprite.renderOrder = 10;

  return sprite;
}

function normalizedBounds(location: Location) {
  return {
    xMin: Math.min(location.xMin, location.xMax),
    xMax: Math.max(location.xMin, location.xMax),
    yMin: Math.min(location.yMin, location.yMax),
    yMax: Math.max(location.yMin, location.yMax),
    zMin: Math.min(location.zMin, location.zMax),
    zMax: Math.max(location.zMin, location.zMax)
  };
}

function getPlanBounds(locations: Location[]) {
  if (locations.length === 0) {
    return null;
  }

  const bounds = locations.map(normalizedBounds);
  const padding = Math.max(
    4,
    Math.max(...bounds.map((location) => location.xMax)) - Math.min(...bounds.map((location) => location.xMin)),
    Math.max(...bounds.map((location) => location.yMax)) - Math.min(...bounds.map((location) => location.yMin))
  ) * 0.08;

  return {
    xMin: Math.min(...bounds.map((location) => location.xMin)) - padding,
    xMax: Math.max(...bounds.map((location) => location.xMax)) + padding,
    yMin: Math.min(...bounds.map((location) => location.yMin)) - padding,
    yMax: Math.max(...bounds.map((location) => location.yMax)) + padding
  };
}

function niceGridStep(span: number) {
  if (span > 100) {
    return 10;
  }
  if (span > 50) {
    return 5;
  }
  if (span > 20) {
    return 2;
  }
  return 1;
}

function formatMeters(value: number) {
  return Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1);
}

function colorForLocation(location: Location) {
  const assignedColor = colorFromDescription(location.description);

  if (assignedColor) {
    return assignedColor;
  }

  if (location.type === 'Boundary') {
    return '#9aa3a6';
  }

  if (location.type === 'Layout Zone') {
    return '#ffffff';
  }

  if (location.type === 'Shop') {
    const decorationColor = decorationColorForLocation(location);

    if (decorationColor) {
      return decorationColor;
    }

    return '#d3d8dc';
  }

  if (location.type === 'Path') {
    return '#c1c9cf';
  }

  if (location.type === 'Gate') {
    const label = labelForLocation(location);

    if (label === 'CR') {
      return '#1d4ed8';
    }

    if (label === 'FIRE' || label === 'FE') {
      return '#dc2626';
    }

    if (label === 'GATE') {
      return '#7c3aed';
    }

    if (label === 'WAY') {
      return '#0f766e';
    }

    return label === 'ENTRANCE' ? '#059669' : '#2563eb';
  }

  return typeColors[location.type];
}

function edgeColorForLocation(location: Location) {
  if (location.type !== 'Shop') {
    return colorForLocation(location);
  }

  return shopAccentColors[shopIndex(location.id) % shopAccentColors.length];
}

function labelForLocation(location: Location) {
  if (location.type !== 'Gate') {
    return location.name || location.id;
  }

  const text = `${location.name} ${location.description ?? ''}`.toLowerCase();
  if (text.includes('cr') || text.includes('restroom') || text.includes('bathroom')) {
    return 'CR';
  }

  if (text.includes('fire extinguisher')) {
    return 'FE';
  }

  if (text.includes('fire exit')) {
    return 'FIRE';
  }

  if (text.includes('gate')) {
    return 'GATE';
  }

  if (text.includes('partition')) {
    return 'PART';
  }

  if (text.includes('gap')) {
    return 'GAP';
  }

  if (text.includes('way')) {
    return 'WAY';
  }

  return text.includes('entrance') ? 'ENTRANCE' : 'EXIT';
}

function colorFromDescription(description?: string) {
  const match = description?.match(/(?:^|;)\s*Color:\s*(#[0-9a-f]{6})/i);
  return match?.[1] ?? null;
}

function shapeForLocation(location: Location) {
  const text = `${location.name} ${location.description ?? ''}`.toLowerCase();

  if (text.includes('circle')) {
    return 'circle';
  }

  if (text.includes('oblong')) {
    return 'oblong';
  }

  if (text.includes('animal')) {
    return 'animal';
  }

  if (text.includes('tree')) {
    return 'tree';
  }

  if (text.includes('person walking') || text.includes('person standing')) {
    return 'person';
  }

  return 'block';
}

function decorationColorForLocation(location: Location) {
  const text = `${location.name} ${location.description ?? ''}`.toLowerCase();

  if (text.includes('tree')) {
    return '#22c55e';
  }

  if (text.includes('person walking')) {
    return '#0ea5e9';
  }

  if (text.includes('person standing')) {
    return '#6366f1';
  }

  if (text.includes('animal character') || text.includes('animal block')) {
    return '#f59e0b';
  }

  if (text.includes('chair')) {
    return '#64748b';
  }

  return null;
}

function shopIndex(id: string) {
  const numericSuffix = Number.parseInt(id.replace(/\D+/g, ''), 10);
  return Number.isFinite(numericSuffix) ? Math.max(numericSuffix - 1, 0) : 0;
}

function roundRect(
  context: CanvasRenderingContext2D,
  x: number,
  y: number,
  width: number,
  height: number,
  radius: number
) {
  context.beginPath();
  context.moveTo(x + radius, y);
  context.lineTo(x + width - radius, y);
  context.quadraticCurveTo(x + width, y, x + width, y + radius);
  context.lineTo(x + width, y + height - radius);
  context.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  context.lineTo(x + radius, y + height);
  context.quadraticCurveTo(x, y + height, x, y + height - radius);
  context.lineTo(x, y + radius);
  context.quadraticCurveTo(x, y, x + radius, y);
  context.closePath();
}
