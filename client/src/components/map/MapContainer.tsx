import type { Location } from '../../types/location';
import ThreeMapCanvas from './ThreeMapCanvas';

interface MapContainerProps {
  locations: Location[];
  hoveredLocationId: string | null;
  selectedLocationId: string | null;
  onHoverLocation: (locationId: string | null) => void;
  onSelectLocation: (locationId: string) => void;
}

export default function MapContainer({
  locations,
  hoveredLocationId,
  selectedLocationId,
  onHoverLocation,
  onSelectLocation
}: MapContainerProps) {
  return (
    <section className="map-container">
      <ThreeMapCanvas
        locations={locations}
        hoveredLocationId={hoveredLocationId}
        selectedLocationId={selectedLocationId}
        onHoverLocation={onHoverLocation}
        onSelectLocation={onSelectLocation}
      />
      <p className="map-hint">Pinch to zoom and drag to move</p>
    </section>
  );
}
