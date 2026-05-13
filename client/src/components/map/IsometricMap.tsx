import { useMemo, useRef, useState, type PointerEvent as ReactPointerEvent, type WheelEvent } from 'react';
import type { Location, LocationType } from '../../types/location';

interface IsometricMapProps {
  locations: Location[];
  hoveredLocationId: string | null;
  selectedLocationId: string | null;
  searchedLocationIds: string[];
  onHoverLocation: (locationId: string | null) => void;
  onSelectLocation: (locationId: string) => void;
}

interface Point {
  x: number;
  y: number;
}

const typeColors: Record<LocationType, string> = {
  Boundary: '#8b949e',
  'Layout Zone': '#c7d8ee',
  'Main Aisle': '#40505a',
  'Work Area': '#f2a65f',
  Pillar: '#374151',
  Gate: '#f59e0b',
  Wall: '#7b8794',
  'Non-placeable Area': '#ef8b9a',
  Shelf: '#d6dadd',
  Nestainer: '#bfc9d6',
  'Operation Area': '#ef4444',
  Shop: '#d6dadd',
  Path: '#3f484b',
  Dock: '#b7c7dd',
  Rack: '#c4cbd3',
  Office: '#ef4444'
};

const shopAccentColors = [
  '#b91c1c',
  '#7c3aed',
  '#db2777',
  '#ea580c',
  '#0891b2',
  '#2563eb',
  '#16a34a',
  '#ca8a04',
  '#dc2626',
  '#4f46e5'
];

const scale = 18;
const isoXScale = 0.96;
const zScale = 12;
const minZoom = 0.7;
const maxZoom = 3.2;
const minPitch = 0.32;
const maxPitch = 0.82;

export default function IsometricMap({
  locations,
  hoveredLocationId,
  selectedLocationId,
  searchedLocationIds,
  onHoverLocation,
  onSelectLocation
}: IsometricMapProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const activePointersRef = useRef(new Map<number, Point>());
  const dragStateRef = useRef<{ x: number; y: number; rotation: number } | null>(null);
  const pinchStateRef = useRef<{ distance: number; zoom: number } | null>(null);
  const [zoom, setZoom] = useState(1);
  const [rotation, setRotation] = useState(-28);
  const [pitch, setPitch] = useState(0.54);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const searched = useMemo(() => new Set(searchedLocationIds), [searchedLocationIds]);
  const center = useMemo(() => getLocationCenter(locations), [locations]);
  const project = (x: number, y: number, z = 0): Point => ({
    ...projectRotatedPoint(x, y, z, center, rotation, pitch)
  });
  const shopLocations = locations.filter((location) => location.type === 'Shop');
  const wayLocations = locations.filter((location) => location.type === 'Path');
  const laneGuides = wayLocations.map((location) => buildLaneGuide(location, project));
  const amenities = buildAmenityMarkers(locations, project);
  const blocks = shopLocations
    .map((location) => buildBlock(location, project, searched, selectedLocationId, hoveredLocationId))
    .sort((left, right) => left.depth - right.depth);
  const baseViewBox = buildViewBox([
    ...blocks.flatMap((block) => block.points),
    ...laneGuides.flatMap((lane) => lane.points),
    ...amenities.map((amenity) => amenity.point)
  ]);
  const viewBox = applyViewTransform(baseViewBox, zoom, offset);
  const floor = buildFloor(locations, project);

  return (
    <svg
      aria-label="Warehouse 3D map"
      className="isometric-map"
      onPointerCancel={handlePointerEnd}
      onPointerDown={handlePointerDown}
      onPointerLeave={handlePointerEnd}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerEnd}
      onWheel={handleWheel}
      ref={svgRef}
      role="img"
      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
    >
      <defs>
        <filter id="iso-shadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="8" floodColor="#111827" floodOpacity="0.25" stdDeviation="5" />
        </filter>
        <marker id="lane-arrow" markerHeight="8" markerWidth="8" orient="auto" refX="7" refY="4">
          <path d="M0,0 L8,4 L0,8 Z" fill="#f8fafc" />
        </marker>
      </defs>
      <rect className="isometric-bg" x={viewBox.x} y={viewBox.y} width={viewBox.width} height={viewBox.height} />
      {floor && <polygon className="isometric-floor" points={pointsToString(floor)} />}
      {laneGuides.map((lane) => (
        <g className="iso-lane" key={lane.location.id}>
          <polygon points={pointsToString(lane.points)} />
          <polyline points={pointsToString(lane.centerLine)} />
          <text x={lane.labelPoint.x} y={lane.labelPoint.y}>
            {lane.label}
          </text>
        </g>
      ))}
      {amenities.map((amenity) => (
        <g className={`iso-amenity iso-amenity-${amenity.kind}`} key={amenity.id}>
          <rect height="28" rx="5" width="38" x={amenity.point.x - 19} y={amenity.point.y - 28} />
          <text x={amenity.point.x} y={amenity.point.y - 10}>
            {amenity.label}
          </text>
        </g>
      ))}
      {blocks.map((block) => (
        <g
          className={`iso-block ${block.isHovered ? 'hovered' : ''} ${block.isSelected ? 'selected' : ''} ${
            block.isSearched ? 'searched' : ''
          }`}
          key={block.location.id}
          onClick={() => onSelectLocation(block.location.id)}
          onMouseEnter={() => onHoverLocation(block.location.id)}
          onMouseLeave={() => onHoverLocation(null)}
        >
          <polygon fill={block.rightColor} points={pointsToString(block.rightFace)} style={{ stroke: block.borderColor }} />
          <polygon fill={block.frontColor} points={pointsToString(block.frontFace)} style={{ stroke: block.borderColor }} />
          <polygon fill={block.topColor} points={pointsToString(block.topFace)} style={{ stroke: block.borderColor }} />
          <polyline
            className="iso-block-border"
            points={pointsToString([...block.topFace, block.topFace[0]])}
            style={{ stroke: block.borderColor }}
          />
          <polyline className="iso-block-outline" points={pointsToString([...block.topFace, block.topFace[0]])} />
          {block.showLabel && (
            <text className="iso-label" x={block.labelPoint.x} y={block.labelPoint.y}>
              {block.location.name}
            </text>
          )}
          {block.showDetail && (
            <g className="iso-detail">
              <rect
                height="102"
                rx="6"
                width={block.detailWidth}
                x={block.detailPoint.x - block.detailWidth / 2}
                y={block.detailPoint.y - 110}
              />
              <text x={block.detailPoint.x} y={block.detailPoint.y - 88}>
                {block.location.name}
              </text>
              <text className="iso-detail-meta" x={block.detailPoint.x} y={block.detailPoint.y - 68}>
                Type: {block.location.type}
              </text>
              <text className="iso-detail-meta" x={block.detailPoint.x} y={block.detailPoint.y - 52}>
                Area: {block.area.toFixed(0)} sq units · Height: {block.height.toFixed(1)}
              </text>
              <text className="iso-detail-meta" x={block.detailPoint.x} y={block.detailPoint.y - 36}>
                X {block.location.xMin}-{block.location.xMax} · Y {block.location.yMin}-{block.location.yMax}
              </text>
              <text className="iso-detail-meta" x={block.detailPoint.x} y={block.detailPoint.y - 20}>
                {block.location.description ?? 'No description available.'}
              </text>
            </g>
          )}
        </g>
      ))}
    </svg>
  );

  function handleWheel(event: WheelEvent<SVGSVGElement>) {
    event.preventDefault();
    const direction = event.deltaY > 0 ? -1 : 1;
    const nextZoom = clamp(zoom * (direction > 0 ? 1.12 : 0.88), minZoom, maxZoom);
    setZoom(nextZoom);
  }

  function handlePointerDown(event: ReactPointerEvent<SVGSVGElement>) {
    const svg = svgRef.current;

    if (!svg) {
      return;
    }

    event.preventDefault();
    svg.setPointerCapture(event.pointerId);
    activePointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (activePointersRef.current.size >= 2) {
      const [first, second] = [...activePointersRef.current.values()];
      pinchStateRef.current = {
        distance: distanceBetween(first, second),
        zoom
      };
      dragStateRef.current = null;
      return;
    }

    dragStateRef.current = {
      x: event.clientX,
      y: event.clientY,
      rotation
    };
  }

  function handlePointerMove(event: ReactPointerEvent<SVGSVGElement>) {
    const svg = svgRef.current;

    if (!svg || !activePointersRef.current.has(event.pointerId)) {
      return;
    }

    event.preventDefault();
    activePointersRef.current.set(event.pointerId, { x: event.clientX, y: event.clientY });

    if (activePointersRef.current.size >= 2) {
      const [first, second] = [...activePointersRef.current.values()];
      const pinch = pinchStateRef.current;

      if (pinch) {
        setZoom(clamp(pinch.zoom * (distanceBetween(first, second) / Math.max(pinch.distance, 1)), minZoom, maxZoom));
      }

      return;
    }

    const drag = dragStateRef.current;

    if (!drag) {
      return;
    }

    const dx = event.clientX - drag.x;
    const dy = event.clientY - drag.y;

    setRotation(normalizeAngle(drag.rotation + dx * 0.35));
    setPitch((current) => clamp(current - dy * 0.0025, minPitch, maxPitch));
    dragStateRef.current = {
      ...drag,
      x: event.clientX,
      y: event.clientY,
      rotation: normalizeAngle(drag.rotation + dx * 0.35)
    };
  }

  function handlePointerEnd(event: ReactPointerEvent<SVGSVGElement>) {
    const svg = svgRef.current;

    if (svg?.hasPointerCapture(event.pointerId)) {
      svg.releasePointerCapture(event.pointerId);
    }

    activePointersRef.current.delete(event.pointerId);
    pinchStateRef.current = null;

    if (activePointersRef.current.size === 1) {
      const [remaining] = activePointersRef.current.values();
      dragStateRef.current = {
        x: remaining.x,
        y: remaining.y,
        rotation
      };
      return;
    }

    dragStateRef.current = null;
  }
}

interface ViewBox {
  x: number;
  y: number;
  width: number;
  height: number;
}

function buildBlock(
  location: Location,
  project: (x: number, y: number, z?: number) => Point,
  searched: Set<string>,
  selectedLocationId: string | null,
  hoveredLocationId: string | null
) {
  const zTop = Math.max(location.zMax, location.zMin + 0.08);
  const topFace = [
    project(location.xMin, location.yMin, zTop),
    project(location.xMax, location.yMin, zTop),
    project(location.xMax, location.yMax, zTop),
    project(location.xMin, location.yMax, zTop)
  ];
  const frontFace = [
    project(location.xMin, location.yMax, location.zMin),
    project(location.xMax, location.yMax, location.zMin),
    project(location.xMax, location.yMax, zTop),
    project(location.xMin, location.yMax, zTop)
  ];
  const rightFace = [
    project(location.xMax, location.yMin, location.zMin),
    project(location.xMax, location.yMax, location.zMin),
    project(location.xMax, location.yMax, zTop),
    project(location.xMax, location.yMin, zTop)
  ];
  const baseColor = colorFor(location, searched, selectedLocationId, hoveredLocationId);
  const borderColor = borderColorFor(location, searched, selectedLocationId, hoveredLocationId);
  const labelPoint = project((location.xMin + location.xMax) / 2, (location.yMin + location.yMax) / 2, zTop + 0.45);
  const detailPoint = project((location.xMin + location.xMax) / 2, (location.yMin + location.yMax) / 2, zTop + 2.3);
  const detailWidth = Math.max(250, Math.min(380, location.name.length * 8 + 190));
  const area = Math.abs(location.xMax - location.xMin) * Math.abs(location.yMax - location.yMin);
  const height = Math.abs(location.zMax - location.zMin);

  return {
    location,
    topFace,
    frontFace,
    rightFace,
    points: [...topFace, ...frontFace, ...rightFace],
    labelPoint,
    topColor: baseColor,
    frontColor: shadeColor(baseColor, -18),
    rightColor: shadeColor(baseColor, -28),
    borderColor,
    detailPoint,
    detailWidth,
    area,
    height,
    depth: location.xMax + location.yMax + zTop,
    isHovered: location.id === hoveredLocationId,
    isSelected: location.id === selectedLocationId,
    isSearched: searched.has(location.id),
    showDetail: location.type === 'Shop' && (location.id === hoveredLocationId || location.id === selectedLocationId),
    showLabel: location.type !== 'Boundary' && location.type !== 'Path'
  };
}

function colorFor(
  location: Location,
  searched: Set<string>,
  selectedLocationId: string | null,
  hoveredLocationId: string | null
) {
  if (location.id === selectedLocationId) {
    return '#ef4444';
  }
  if (location.id === hoveredLocationId) {
    return '#ef4444';
  }
  if (searched.has(location.id)) {
    return '#ef4444';
  }

  return typeColors[location.type] ?? '#d6dadd';
}

function borderColorFor(
  location: Location,
  searched: Set<string>,
  selectedLocationId: string | null,
  hoveredLocationId: string | null
) {
  if (location.id === selectedLocationId) {
    return '#991b1b';
  }
  if (location.id === hoveredLocationId) {
    return '#991b1b';
  }
  if (searched.has(location.id)) {
    return '#991b1b';
  }
  if (location.type === 'Shop') {
    return shopAccentColors[shopIndex(location.id) % shopAccentColors.length];
  }

  return '#17202a';
}

function buildFloor(locations: Location[], project: (x: number, y: number, z?: number) => Point) {
  if (locations.length === 0) {
    return null;
  }

  const minX = Math.min(...locations.map((location) => location.xMin)) - 2;
  const minY = Math.min(...locations.map((location) => location.yMin)) - 2;
  const maxX = Math.max(...locations.map((location) => location.xMax)) + 2;
  const maxY = Math.max(...locations.map((location) => location.yMax)) + 2;

  return [project(minX, minY, 0), project(maxX, minY, 0), project(maxX, maxY, 0), project(minX, maxY, 0)];
}

function buildLaneGuide(location: Location, project: (x: number, y: number, z?: number) => Point) {
  const laneZ = 0.06;
  const points = [
    project(location.xMin, location.yMin, laneZ),
    project(location.xMax, location.yMin, laneZ),
    project(location.xMax, location.yMax, laneZ),
    project(location.xMin, location.yMax, laneZ)
  ];
  const isVertical = location.yMax - location.yMin >= location.xMax - location.xMin;
  const midX = (location.xMin + location.xMax) / 2;
  const midY = (location.yMin + location.yMax) / 2;
  const centerLine = isVertical
    ? [project(midX, location.yMin + 1, laneZ + 0.02), project(midX, location.yMax - 1, laneZ + 0.02)]
    : [project(location.xMin + 1, midY, laneZ + 0.02), project(location.xMax - 1, midY, laneZ + 0.02)];

  return {
    location,
    points,
    centerLine,
    label: location.name.toLowerCase().includes('way') ? 'WAY' : isVertical ? 'North/South Way' : 'East/West Way',
    labelPoint: project(midX, midY, laneZ + 0.18)
  };
}

function buildAmenityMarkers(locations: Location[], project: (x: number, y: number, z?: number) => Point) {
  const signLocations = locations.filter((location) => location.type === 'Gate');

  if (signLocations.length > 0) {
    return signLocations.map((location) => {
      const label = signLabelFor(location);

      return {
        id: `amenity-${location.id}`,
        kind: label === 'CR' ? 'cr' : 'exit',
        label,
        point: project((location.xMin + location.xMax) / 2, (location.yMin + location.yMax) / 2, Math.max(location.zMax, 1.8))
      };
    });
  }

  const boundary = locations.find((location) => location.type === 'Boundary');
  const verticalPath = locations.find((location) => location.id.includes('vert')) ?? locations.find((location) => location.type === 'Path');
  const horizontalPath =
    locations.find((location) => location.id.includes('horiz')) ?? locations.filter((location) => location.type === 'Path')[1];

  if (!boundary || !verticalPath || !horizontalPath) {
    return [];
  }

  const midX = (verticalPath.xMin + verticalPath.xMax) / 2;
  const midY = (horizontalPath.yMin + horizontalPath.yMax) / 2;

  return [
    {
      id: 'amenity-exit-north',
      kind: 'exit',
      label: 'EXIT',
      point: project(midX, boundary.yMax - 1.5, 1.8)
    },
    {
      id: 'amenity-exit-south',
      kind: 'exit',
      label: 'EXIT',
      point: project(midX, boundary.yMin + 1.5, 1.8)
    },
    {
      id: 'amenity-cr',
      kind: 'cr',
      label: 'CR',
      point: project(midX + 5.5, midY + 4, 1.8)
    },
    {
      id: 'amenity-way-left',
      kind: 'way',
      label: 'WAY',
      point: project(boundary.xMin + 8, midY, 1.8)
    },
    {
      id: 'amenity-way-right',
      kind: 'way',
      label: 'WAY',
      point: project(boundary.xMax - 8, midY, 1.8)
    }
  ];
}

function signLabelFor(location: Location) {
  const text = `${location.name} ${location.description ?? ''}`.toLowerCase();

  if (text.includes('cr') || text.includes('restroom') || text.includes('bathroom')) {
    return 'CR';
  }

  return text.includes('entrance') ? 'ENTRANCE' : 'EXIT';
}

function buildViewBox(points: Point[]): ViewBox {
  if (points.length === 0) {
    return { x: -400, y: -220, width: 800, height: 520 };
  }

  const minX = Math.min(...points.map((point) => point.x));
  const maxX = Math.max(...points.map((point) => point.x));
  const minY = Math.min(...points.map((point) => point.y));
  const maxY = Math.max(...points.map((point) => point.y));
  const padding = 110;

  return {
    x: minX - padding,
    y: minY - padding,
    width: maxX - minX + padding * 2,
    height: maxY - minY + padding * 2
  };
}

function applyViewTransform(viewBox: ViewBox, zoom: number, offset: Point): ViewBox {
  const nextWidth = viewBox.width / zoom;
  const nextHeight = viewBox.height / zoom;

  return {
    x: viewBox.x + (viewBox.width - nextWidth) / 2 + offset.x,
    y: viewBox.y + (viewBox.height - nextHeight) / 2 + offset.y,
    width: nextWidth,
    height: nextHeight
  };
}

function pointsToString(points: Point[]) {
  return points.map((point) => `${point.x},${point.y}`).join(' ');
}

function shopIndex(id: string) {
  const numericSuffix = Number.parseInt(id.replace(/\D+/g, ''), 10);
  return Number.isFinite(numericSuffix) ? Math.max(numericSuffix - 1, 0) : 0;
}

function getLocationCenter(locations: Location[]): Point {
  if (locations.length === 0) {
    return { x: 0, y: 0 };
  }

  return {
    x: (Math.min(...locations.map((location) => location.xMin)) + Math.max(...locations.map((location) => location.xMax))) / 2,
    y: (Math.min(...locations.map((location) => location.yMin)) + Math.max(...locations.map((location) => location.yMax))) / 2
  };
}

function projectRotatedPoint(x: number, y: number, z: number, center: Point, rotation: number, pitch: number): Point {
  const radians = (rotation * Math.PI) / 180;
  const localX = x - center.x;
  const localY = y - center.y;
  const rotatedX = localX * Math.cos(radians) - localY * Math.sin(radians) + center.x;
  const rotatedY = localX * Math.sin(radians) + localY * Math.cos(radians) + center.y;

  return {
    x: (rotatedX - rotatedY) * scale * isoXScale,
    y: (rotatedX + rotatedY) * scale * pitch - z * zScale
  };
}

function distanceBetween(first: Point, second: Point) {
  return Math.hypot(first.x - second.x, first.y - second.y);
}

function shadeColor(color: string, percent: number) {
  const hex = color.replace('#', '');
  const red = Number.parseInt(hex.slice(0, 2), 16);
  const green = Number.parseInt(hex.slice(2, 4), 16);
  const blue = Number.parseInt(hex.slice(4, 6), 16);
  const shift = (channel: number) => Math.min(255, Math.max(0, Math.round(channel + (channel * percent) / 100)));

  return `rgb(${shift(red)}, ${shift(green)}, ${shift(blue)})`;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, value));
}

function normalizeAngle(value: number) {
  if (value > 180) {
    return value - 360;
  }
  if (value < -180) {
    return value + 360;
  }

  return value;
}
