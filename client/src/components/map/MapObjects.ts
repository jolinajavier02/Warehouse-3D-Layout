import * as THREE from 'three';
import type { Location, LocationType } from '../../types/location';

export type LocationMesh = THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial> & {
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

export function createLocationMesh(location: Location): LocationMesh {
  const bounds = normalizedBounds(location);
  const width = Math.max(bounds.xMax - bounds.xMin, 0.1);
  const depth = Math.max(bounds.yMax - bounds.yMin, 0.1);
  const height = Math.max(bounds.zMax - bounds.zMin, 0.1);
  const geometry = new THREE.BoxGeometry(width, height, depth);
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
    side: THREE.FrontSide
  });
  const mesh = new THREE.Mesh(geometry, material) as LocationMesh;

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

export function buildLocationGroup(locations: Location[]) {
  const group = new THREE.Group();
  const planBounds = getPlanBounds(locations);

  if (planBounds) {
    group.add(createPlanGrid(planBounds));
  }

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

  if (planBounds) {
    group.add(createDimensionLayer(locations, planBounds));
  }

  return group;
}

function createPlanGrid(bounds: ReturnType<typeof getPlanBounds> & {}) {
  const group = new THREE.Group();
  const material = new THREE.LineBasicMaterial({
    color: '#d8dee6',
    transparent: true,
    opacity: 0.55,
    depthTest: false,
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

  return group;
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
    depthTest: false,
    depthWrite: false,
    fog: false
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
    depthTest: false,
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
  const geometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(width, height, depth));
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
  if (location.type === 'Boundary') {
    return '#9aa3a6';
  }

  if (location.type === 'Layout Zone') {
    return '#ffffff';
  }

  if (location.type === 'Shop') {
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
