import { useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react';
import MapContainer from './components/map/MapContainer';
import { useLocations } from './hooks/useLocations';
import { useMapSelection } from './hooks/useMapSelection';
import { parseLocationsCsv } from './services/csvLocations';
import type { Location } from './types/location';

type Page = 'home' | 'data' | 'layout' | 'analytics';

const uploadedCsvStorageKey = 'warehouse-layout-uploaded-csv';
const uploadedNameStorageKey = 'warehouse-layout-uploaded-name';
const emptyWarehouseLocations: Location[] = [
  {
    id: 'boundary_empty',
    type: 'Boundary',
    name: 'White Warehouse Boundary',
    xMin: 0,
    yMin: 0,
    xMax: 92,
    yMax: 58,
    zMin: 0,
    zMax: 0.1,
    description: 'White warehouse boundary after deleting data'
  },
  {
    id: 'base_empty',
    type: 'Layout Zone',
    name: 'Gray Base Surface',
    xMin: 3,
    yMin: 3,
    xMax: 89,
    yMax: 55,
    zMin: 0.1,
    zMax: 0.14,
    description: 'Gray base surface after deleting data'
  }
];

const navItems: Array<{ id: Page; label: string; icon: string }> = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'data', label: 'Data Governance', icon: '▣' },
  { id: 'layout', label: 'Layout Strategy', icon: '▤' },
  { id: 'analytics', label: 'Analytics', icon: '⌁' }
];

export default function App() {
  const { locations: defaultLocations, loading, error } = useLocations();
  const [activePage, setActivePage] = useState<Page>('home');
  const [uploadedLocations, setUploadedLocations] = useState<Location[] | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [dataError, setDataError] = useState<string | null>(null);
  const locations = uploadedLocations ?? defaultLocations;
  const selection = useMapSelection(locations);
  const stats = useMemo(() => buildStats(locations), [locations]);

  useEffect(() => {
    const savedCsv = window.localStorage.getItem(uploadedCsvStorageKey);
    const savedName = window.localStorage.getItem(uploadedNameStorageKey);

    if (!savedCsv) {
      return;
    }

    const parsed = parseLocationsCsv(savedCsv);
    if (parsed.length > 0) {
      setUploadedLocations(parsed);
      setUploadedFileName(savedName || 'uploaded-layout.csv');
    }
  }, []);

  function handleUpload(file: File) {
    setDataError(null);

    if (!file.name.toLowerCase().endsWith('.csv')) {
      setDataError('Please upload a CSV file using the location schema.');
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const csv = String(reader.result ?? '');
      const parsed = parseLocationsCsv(csv);

      if (parsed.length === 0) {
        setDataError('No valid location rows were found in this CSV.');
        return;
      }

      setUploadedLocations(parsed);
      setUploadedFileName(file.name);
      setActivePage('layout');
      window.localStorage.setItem(uploadedCsvStorageKey, csv);
      window.localStorage.setItem(uploadedNameStorageKey, file.name);
    };

    reader.onerror = () => setDataError('The file could not be read.');
    reader.readAsText(file);
  }

  function handleDeleteDataset() {
    const csv = locationsToCsv(emptyWarehouseLocations);

    setUploadedLocations(emptyWarehouseLocations);
    setUploadedFileName('empty-warehouse.csv');
    setDataError(null);
    window.localStorage.setItem(uploadedCsvStorageKey, csv);
    window.localStorage.setItem(uploadedNameStorageKey, 'empty-warehouse.csv');
  }

  function handleDeleteRow(locationId: string) {
    setUploadedLocations((current) => {
      const source = current ?? locations;
      const nextLocations = source.filter((location) => location.id !== locationId);
      const csv = locationsToCsv(nextLocations);

      window.localStorage.setItem(uploadedCsvStorageKey, csv);
      window.localStorage.setItem(uploadedNameStorageKey, uploadedFileName ?? 'edited-layout.csv');
      setUploadedFileName((currentName) => currentName ?? 'edited-layout.csv');

      return nextLocations;
    });
  }

  return (
    <div className="app-shell">
      <aside className="app-nav" aria-label="Primary navigation">
        <button className="nav-collapse" type="button" aria-label="Collapse navigation">
          ‹
        </button>
        <nav className="nav-items">
          {navItems.map((item) => (
            <button
              className={activePage === item.id ? 'active' : ''}
              key={item.id}
              type="button"
              onClick={() => setActivePage(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              {item.label}
            </button>
          ))}
        </nav>
        <button type="button">
          <span className="nav-icon">⚙</span>
          Settings
        </button>
      </aside>

      <main className="main-panel">
        <AppHeader />
        {activePage === 'home' && <HomePage stats={stats} onOpenLayout={() => setActivePage('layout')} />}
        {activePage === 'data' && (
          <DataGovernancePage
            locations={locations}
            uploadedFileName={uploadedFileName}
            dataError={dataError}
            loading={loading}
            error={error}
            onUpload={handleUpload}
            onDeleteDataset={handleDeleteDataset}
            onDeleteRow={handleDeleteRow}
          />
        )}
        {activePage === 'layout' && (
          <LayoutPage
            locations={locations}
            loading={loading}
            error={error}
            selection={selection}
            uploadedFileName={uploadedFileName}
          />
        )}
        {activePage === 'analytics' && <AnalyticsPage stats={stats} />}
      </main>
    </div>
  );
}

function AppHeader() {
  return (
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
  );
}

function HomePage({ stats, onOpenLayout }: { stats: ReturnType<typeof buildStats>; onOpenLayout: () => void }) {
  return (
    <section className="page-panel home-page">
      <div className="hero-panel">
        <h2>Warehouse Layout Workspace</h2>
        <p>Upload facility data, validate rows, and view the generated 3D shop layout in one workflow.</p>
        <button type="button" onClick={onOpenLayout}>
          Open 3D Map
        </button>
      </div>
      <div className="metric-grid">
        <Metric label="Blocks" value={stats.blocks} />
        <Metric label="Shops" value={stats.shops} />
        <Metric label="Signs" value={stats.signs} />
        <Metric label="Lanes" value={stats.lanes} />
      </div>
    </section>
  );
}

function DataGovernancePage({
  locations,
  uploadedFileName,
  dataError,
  loading,
  error,
  onUpload,
  onDeleteDataset,
  onDeleteRow
}: {
  locations: Location[];
  uploadedFileName: string | null;
  dataError: string | null;
  loading: boolean;
  error: string | null;
  onUpload: (file: File) => void;
  onDeleteDataset: () => void;
  onDeleteRow: (locationId: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const stats = buildStats(locations);

  function handleFileChange(event: ChangeEvent<HTMLInputElement>) {
    const [file] = event.target.files ?? [];

    if (file) {
      onUpload(file);
      event.target.value = '';
    }
  }

  return (
    <section className="data-page">
      <div className="workbook-bar">
        <div className="upload-mark">↥</div>
        <div>
          <small>WORKBOOK</small>
          <strong>{uploadedFileName ?? 'location-30-shops.csv'}</strong>
        </div>
        <input accept=".csv,text/csv" hidden onChange={handleFileChange} ref={inputRef} type="file" />
        <button type="button" onClick={() => inputRef.current?.click()}>
          Upload .csv
        </button>
        <button className="danger-button" disabled={!uploadedFileName} type="button" onClick={onDeleteDataset}>
          Delete Upload
        </button>
      </div>

      <div className="data-workspace">
        <aside className="sheet-list">
          <h3>Sheets</h3>
          <button className="active" type="button">
            Facility <span>{locations.length} x 10</span>
          </button>
          <button type="button">
            Shops <span>{stats.shops} rows</span>
          </button>
          <button type="button">
            Signs <span>{stats.signs} rows</span>
          </button>
          <button type="button">
            Lanes <span>{stats.lanes} rows</span>
          </button>
        </aside>

        <section className="data-table-panel">
          <div className="table-toolbar">
            <button type="button" onClick={() => inputRef.current?.click()}>
              + Add Data File
            </button>
            <p>Uploaded data is local and becomes the source for the 3D map.</p>
          </div>
          <div className="data-table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th>id</th>
                  <th>type</th>
                  <th>name</th>
                  <th>xMin</th>
                  <th>yMin</th>
                  <th>zMin</th>
                  <th>xMax</th>
                  <th>yMax</th>
                  <th>zMax</th>
                  <th>description</th>
                  <th aria-label="actions" />
                </tr>
              </thead>
              <tbody>
                {locations.map((location) => (
                  <tr key={location.id}>
                    <td>{location.id}</td>
                    <td>{location.type}</td>
                    <td>{location.name}</td>
                    <td>{location.xMin}</td>
                    <td>{location.yMin}</td>
                    <td>{location.zMin}</td>
                    <td>{location.xMax}</td>
                    <td>{location.yMax}</td>
                    <td>{location.zMax}</td>
                    <td>{location.description}</td>
                    <td>
                      <button aria-label={`Delete ${location.name}`} type="button" onClick={() => onDeleteRow(location.id)}>
                        ×
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <aside className="validation-report">
          <h3>Data Validation Report</h3>
          <section>
            <h4>Visualization</h4>
            {loading && <p>Loading default layout...</p>}
            {error && <p className="report-error">{error}</p>}
            {dataError && <p className="report-error">{dataError}</p>}
            <ul>
              <li>{stats.blocks} total blocks</li>
              <li>{stats.shops} shops</li>
              <li>{stats.signs} signs</li>
              <li>{stats.lanes} lane markers</li>
            </ul>
          </section>
          <section>
            <h4>All Checks</h4>
            <CheckRow label="Required columns" ok />
            <CheckRow label="Valid location types" ok={!dataError} />
            <CheckRow label="Map-ready rows" ok={locations.length > 0} />
          </section>
        </aside>
      </div>
    </section>
  );
}

function LayoutPage({
  locations,
  loading,
  error,
  selection,
  uploadedFileName
}: {
  locations: Location[];
  loading: boolean;
  error: string | null;
  selection: ReturnType<typeof useMapSelection>;
  uploadedFileName: string | null;
}) {
  return (
    <section className="layout-map-stage" aria-label="Layout Strategy">
      <div className="layout-source-pill">{uploadedFileName ? `Using uploaded data: ${uploadedFileName}` : 'Using default CSV data'}</div>
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
  );
}

function AnalyticsPage({ stats }: { stats: ReturnType<typeof buildStats> }) {
  return (
    <section className="page-panel analytics-page">
      <h2>Analytics</h2>
      <p>Temporary layout analytics summary.</p>
      <div className="metric-grid">
        <Metric label="Total Rows" value={stats.blocks} />
        <Metric label="Shop Coverage" value={`${stats.shops} shops`} />
        <Metric label="Way Markers" value={stats.lanes} />
        <Metric label="Navigation Signs" value={stats.signs} />
      </div>
    </section>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return (
    <article className="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
    </article>
  );
}

function CheckRow({ label, ok }: { label: string; ok: boolean }) {
  return (
    <div className="check-row">
      <strong>{label}</strong>
      <span className={ok ? 'ok' : 'error'}>{ok ? 'OK' : 'ERROR'}</span>
    </div>
  );
}

function buildStats(locations: Location[]) {
  return {
    blocks: locations.length,
    shops: locations.filter((location) => location.type === 'Shop').length,
    signs: locations.filter((location) => location.type === 'Gate').length,
    lanes: locations.filter((location) => location.type === 'Path').length
  };
}

function locationsToCsv(locations: Location[]) {
  const rows = locations.map((location) =>
    [
      location.id,
      location.type,
      location.name,
      location.xMin,
      location.yMin,
      location.xMax,
      location.yMax,
      location.zMin,
      location.zMax,
      location.description ?? ''
    ]
      .map(csvCell)
      .join(',')
  );

  return ['id,type,name,xMin,yMin,xMax,yMax,zMin,zMax,description', ...rows].join('\n');
}

function csvCell(value: string | number) {
  const text = String(value);
  return /[",\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}
