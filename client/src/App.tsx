import { useMemo, useState } from 'react';
import BottomNav from './components/layout/BottomNav';
import Sidebar from './components/layout/Sidebar';
import MapContainer from './components/map/MapContainer';
import { useLocations } from './hooks/useLocations';
import { useMapSelection } from './hooks/useMapSelection';

export default function App() {
  const { locations, loading, error } = useLocations();
  const selection = useMapSelection(locations);
  const [query, setQuery] = useState('');

  const filteredLocations = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return locations;
    }

    return locations.filter((location) => {
      return (
        location.name.toLowerCase().includes(normalizedQuery) ||
        location.type.toLowerCase().includes(normalizedQuery) ||
        location.description?.toLowerCase().includes(normalizedQuery)
      );
    });
  }, [locations, query]);
  const searchedLocationIds = query.trim() ? filteredLocations.map((location) => location.id) : [];

  return (
    <div className="app-shell">
      <Sidebar
        query={query}
        locations={filteredLocations}
        selectedLocation={selection.selectedLocation}
        selectedLocationId={selection.selectedLocationId}
        onQueryChange={setQuery}
        onSelectLocation={selection.setSelectedLocationId}
      />
      <main className="main-panel">
        <MapContainer
          locations={locations}
          selectedLocationId={selection.selectedLocationId}
          hoveredLocationId={selection.hoveredLocationId}
          searchedLocationIds={searchedLocationIds}
          onHoverLocation={selection.setHoveredLocationId}
          onSelectLocation={selection.setSelectedLocationId}
        />
        {loading && <div className="map-status">Loading layout...</div>}
        {error && <div className="map-status map-status-error">{error}</div>}
        <BottomNav />
      </main>
    </div>
  );
}
