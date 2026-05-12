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
  'Layout Zone': '#bfdbfe',
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
    const mesh = createLocationMesh(location);
    group.add(mesh);

    if (location.type !== 'Boundary' && location.type !== 'Main Aisle') {
      group.add(createLocationLabel(location));
    }
  });

  return group;
}

function createLocationLabel(location: Location) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const label = location.name || location.id;
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
