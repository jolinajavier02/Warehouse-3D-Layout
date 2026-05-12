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

const scale = 18;
const isoXScale = 0.96;
const isoYScale = 0.48;
const zScale = 8;

export default function IsometricMap({
  locations,
  hoveredLocationId,
  selectedLocationId,
  searchedLocationIds,
  onHoverLocation,
  onSelectLocation
}: IsometricMapProps) {
  const searched = new Set(searchedLocationIds);
  const project = (x: number, y: number, z = 0): Point => ({
    x: (x - y) * scale * isoXScale,
    y: (x + y) * scale * isoYScale - z * zScale
  });
  const blocks = locations
    .map((location) => buildBlock(location, project, searched, selectedLocationId, hoveredLocationId))
    .sort((left, right) => left.depth - right.depth);
  const viewBox = buildViewBox(blocks.flatMap((block) => block.points));
  const floor = buildFloor(locations, project);

  return (
    <svg
      aria-label="Warehouse 3D map"
      className="isometric-map"
      role="img"
      viewBox={`${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`}
    >
      <rect className="isometric-bg" x={viewBox.x} y={viewBox.y} width={viewBox.width} height={viewBox.height} />
      {floor && <polygon className="isometric-floor" points={pointsToString(floor)} />}
      {blocks.map((block) => (
        <g
          className={`iso-block ${block.isSelected ? 'selected' : ''} ${block.isSearched ? 'searched' : ''}`}
          key={block.location.id}
          onClick={() => onSelectLocation(block.location.id)}
          onMouseEnter={() => onHoverLocation(block.location.id)}
          onMouseLeave={() => onHoverLocation(null)}
        >
          <polygon fill={block.rightColor} points={pointsToString(block.rightFace)} />
          <polygon fill={block.frontColor} points={pointsToString(block.frontFace)} />
          <polygon fill={block.topColor} points={pointsToString(block.topFace)} />
          <polyline className="iso-block-outline" points={pointsToString([...block.topFace, block.topFace[0]])} />
          {block.showLabel && (
            <text className="iso-label" x={block.labelPoint.x} y={block.labelPoint.y}>
              {block.location.name}
            </text>
          )}
        </g>
      ))}
    </svg>
  );
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
  const labelPoint = project((location.xMin + location.xMax) / 2, (location.yMin + location.yMax) / 2, zTop + 0.45);

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
    depth: location.xMax + location.yMax + zTop,
    isSelected: location.id === selectedLocationId,
    isSearched: searched.has(location.id),
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
    return '#f97316';
  }
  if (location.id === hoveredLocationId) {
    return '#60a5fa';
  }
  if (searched.has(location.id)) {
    return '#facc15';
  }

  return typeColors[location.type] ?? '#d6dadd';
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

function buildViewBox(points: Point[]) {
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

function pointsToString(points: Point[]) {
  return points.map((point) => `${point.x},${point.y}`).join(' ');
}

function shadeColor(color: string, percent: number) {
  const hex = color.replace('#', '');
  const red = Number.parseInt(hex.slice(0, 2), 16);
  const green = Number.parseInt(hex.slice(2, 4), 16);
  const blue = Number.parseInt(hex.slice(4, 6), 16);
  const shift = (channel: number) => Math.min(255, Math.max(0, Math.round(channel + (channel * percent) / 100)));

  return `rgb(${shift(red)}, ${shift(green)}, ${shift(blue)})`;
}
