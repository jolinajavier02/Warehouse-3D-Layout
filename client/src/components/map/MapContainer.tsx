import type { Location } from '../../types/location';
import ThreeMapCanvas from './ThreeMapCanvas';

interface MapContainerProps {
  locations: Location[];
  hoveredLocationId: string | null;
  selectedLocationId: string | null;
  searchedLocationIds: string[];
  onHoverLocation: (locationId: string | null) => void;
  onSelectLocation: (locationId: string) => void;
  staticView?: boolean;
}

export default function MapContainer({
  locations,
  hoveredLocationId,
  selectedLocationId,
  searchedLocationIds,
  onHoverLocation,
  onSelectLocation,
  staticView = false
}: MapContainerProps) {
  const activeLocation =
    locations.find((location) => location.id === hoveredLocationId) ??
    locations.find((location) => location.id === selectedLocationId) ??
    null;

  return (
    <section className="map-container">
      <ThreeMapCanvas
        locations={locations}
        hoveredLocationId={hoveredLocationId}
        selectedLocationId={selectedLocationId}
        searchedLocationIds={searchedLocationIds}
        onHoverLocation={onHoverLocation}
        onSelectLocation={onSelectLocation}
        staticView={staticView}
      />
      {activeLocation && activeLocation.type === 'Shop' && (
        <aside className="map-hover-card" aria-live="polite">
          <strong>{activeLocation.name}</strong>
          <span>{activeLocation.description}</span>
          <small>
            {Math.abs(activeLocation.xMax - activeLocation.xMin).toFixed(1)} x{' '}
            {Math.abs(activeLocation.yMax - activeLocation.yMin).toFixed(1)} units
          </small>
        </aside>
      )}
      <p className="map-hint">
        {staticView ? 'Scroll to zoom and click a block to select it' : 'Drag to move, scroll to zoom, center knob rotates'}
      </p>
    </section>
  );
}
