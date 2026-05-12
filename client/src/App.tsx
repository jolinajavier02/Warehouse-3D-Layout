import MapContainer from './components/map/MapContainer';
import { useLocations } from './hooks/useLocations';
import { useMapSelection } from './hooks/useMapSelection';

export default function App() {
  const { locations, loading, error } = useLocations();
  const selection = useMapSelection(locations);

  return (
    <div className="app-shell">
      <aside className="app-nav" aria-label="Primary navigation">
        <button className="nav-collapse" type="button" aria-label="Collapse navigation">
          ‹
        </button>
        <div className="nav-items">
          <button type="button">⌂ Home</button>
          <button type="button">▣ Data Governance</button>
          <button className="active" type="button">
            ▤ Layout Analysis
          </button>
          <button type="button">⌁ Analytics</button>
        </div>
        <button type="button">⚙ Settings</button>
      </aside>

      <main className="main-panel layout-analysis-page">
        <header className="app-header">
          <div className="brand-lockup">
            <div className="qubit-mark">✣</div>
            <div>
              <h1>Qubit Star</h1>
              <p>Layout Strategy &amp; Plan Exploration</p>
            </div>
          </div>
          <p>Cooperation by Quanmatic for Suzuyo</p>
        </header>

        <section className="layout-map-stage" aria-label="Layout Analysis">
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
        </section>
      </main>
    </div>
  );
}
