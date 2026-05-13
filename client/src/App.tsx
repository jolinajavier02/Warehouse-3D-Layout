import MapContainer from './components/map/MapContainer';
import { useLocations } from './hooks/useLocations';
import { useMapSelection } from './hooks/useMapSelection';

export default function App() {
  const { locations, loading, error } = useLocations();
  const selection = useMapSelection(locations);

  return (
    <main className="map-only-page" aria-label="Warehouse 3D map">
      <MapContainer
        locations={locations}
        selectedLocationId={selection.selectedLocationId}
        hoveredLocationId={selection.hoveredLocationId}
        searchedLocationIds={[]}
        onHoverLocation={selection.setHoveredLocationId}
        onSelectLocation={selection.setSelectedLocationId}
      />
      {loading && <div className="map-status">Loading layout...</div>}
      {error && <div className="map-status map-status-error">{error}</div>}
    </main>
  );
}
