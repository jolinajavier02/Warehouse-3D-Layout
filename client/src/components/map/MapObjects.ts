import * as THREE from 'three';
import type { Location, LocationType } from '../../types/location';

export type LocationMesh = THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial> & {
  userData: {
    locationId: string;
    baseColor: THREE.Color;
  };
};

const typeColors: Record<LocationType, string> = {
  Boundary: '#313833',
  'Layout Zone': '#f8fafc',
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
  Path: '#4b5258',
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

export function createLocationMesh(location: Location): LocationMesh {
  const width = Math.max(location.xMax - location.xMin, 0.1);
  const depth = Math.max(location.yMax - location.yMin, 0.1);
  const height = Math.max(location.zMax - location.zMin, 0.1);
  const geometry = new THREE.BoxGeometry(width, height, depth);
  const baseColor = new THREE.Color(colorForLocation(location));
  const material = new THREE.MeshStandardMaterial({
    color: baseColor,
    roughness: location.type === 'Boundary' || location.type === 'Layout Zone' ? 0.88 : 0.52,
    metalness: 0.05,
    transparent: false,
    opacity: 1,
    side: THREE.DoubleSide
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
    const mesh = createLocationMesh(location);
    group.add(mesh);

    if (location.type === 'Shop' || location.type === 'Gate') {
      group.add(createLocationEdges(location));
    }

    if (location.type === 'Shop' || location.type === 'Gate') {
      group.add(createLocationLabel(location));
    }
  });

  return group;
}

function createLocationEdges(location: Location) {
  const width = Math.max(location.xMax - location.xMin, 0.1);
  const depth = Math.max(location.yMax - location.yMin, 0.1);
  const height = Math.max(location.zMax - location.zMin, 0.1);
  const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(width, height, depth));
  const material = new THREE.LineBasicMaterial({ color: edgeColorForLocation(location) });
  const edges = new THREE.LineSegments(geometry, material);

  edges.position.set(
    location.xMin + width / 2,
    location.zMin + height / 2,
    location.yMin + depth / 2
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

  const width = Math.max(location.xMax - location.xMin, 0.1);
  const depth = Math.max(location.yMax - location.yMin, 0.1);
  const height = Math.max(location.zMax - location.zMin, 0.1);
  const texture = new THREE.CanvasTexture(canvas);
  const material = new THREE.SpriteMaterial({
    map: texture,
    transparent: true,
    depthTest: false,
    depthWrite: false
  });
  const sprite = new THREE.Sprite(material);

  sprite.position.set(
    location.xMin + width / 2,
    location.zMin + height + 0.28,
    location.yMin + depth / 2
  );
  sprite.scale.set(Math.min(Math.max(width, depth, 1.8), 6), Math.min(Math.max(width, depth, 1.8), 6) / 4, 1);
  sprite.renderOrder = 10;

  return sprite;
}

function colorForLocation(location: Location) {
  if (location.type === 'Shop') {
    return '#d9dee2';
  }

  if (location.type === 'Gate') {
    const label = labelForLocation(location);

    if (label === 'CR') {
      return '#1d4ed8';
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

  return text.includes('entrance') ? 'ENTRANCE' : 'EXIT';
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
