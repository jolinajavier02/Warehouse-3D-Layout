import type { Location, LocationType } from '../../types/location';

interface SidebarProps {
  query: string;
  locations: Location[];
  selectedLocation: Location | null;
  selectedLocationId: string | null;
  onQueryChange: (query: string) => void;
  onSelectLocation: (locationId: string) => void;
}

const filters: LocationType[] = ['Shop', 'Path', 'Boundary', 'Dock', 'Rack'];

export default function Sidebar({
  query,
  locations,
  selectedLocation,
  selectedLocationId,
  onQueryChange,
  onSelectLocation
}: SidebarProps) {
  return (
    <aside className="sidebar">
      <label className="search-field">
        <span>Search</span>
        <input
          value={query}
          onChange={(event) => onQueryChange(event.target.value)}
          placeholder="Shop, path, boundary..."
          type="search"
        />
      </label>

      <div className="filter-list" aria-label="Location filters">
        {filters.map((filter) => (
          <button key={filter} type="button" onClick={() => onQueryChange(filter)}>
            {filter}
          </button>
        ))}
      </div>

      <section className="location-list" aria-label="Locations">
        {locations.map((location) => (
          <button
            className={location.id === selectedLocationId ? 'selected' : ''}
            key={location.id}
            type="button"
            onClick={() => onSelectLocation(location.id)}
          >
            <span>{location.name}</span>
            <small>{location.type}</small>
          </button>
        ))}
      </section>

      <section className="details-panel" aria-live="polite">
        {selectedLocation ? (
          <>
            <p className="eyebrow">{selectedLocation.type}</p>
            <h2>{selectedLocation.name}</h2>
            <p>{selectedLocation.description ?? 'No description available.'}</p>
            <dl>
              <div>
                <dt>X</dt>
                <dd>
                  {selectedLocation.xMin} - {selectedLocation.xMax}
                </dd>
              </div>
              <div>
                <dt>Y</dt>
                <dd>
                  {selectedLocation.yMin} - {selectedLocation.yMax}
                </dd>
              </div>
              <div>
                <dt>Z</dt>
                <dd>
                  {selectedLocation.zMin} - {selectedLocation.zMax}
                </dd>
              </div>
            </dl>
          </>
        ) : (
          <p>Select a block to view its details.</p>
        )}
      </section>
    </aside>
  );
}
