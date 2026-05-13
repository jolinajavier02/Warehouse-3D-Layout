import { useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react';
import MapContainer from './components/map/MapContainer';
import { useLocations } from './hooks/useLocations';
import { useMapSelection } from './hooks/useMapSelection';
import { parseLocationsCsv } from './services/csvLocations';
import { parseWorkbookLocationsFromBuffer } from './services/workbookLocations';
import type { Location, LocationType } from './types/location';

type Page = 'home' | 'data' | 'layout' | 'analytics';

const uploadedCsvStorageKey = 'warehouse-layout-uploaded-csv';
const uploadedNameStorageKey = 'warehouse-layout-uploaded-name';
const emptyWarehouseLocations: Location[] = [
  {
    id: 'boundary_empty',
    type: 'Boundary',
    name: 'Gray Warehouse Boundary',
    xMin: 0,
    yMin: 0,
    xMax: 92,
    yMax: 58,
    zMin: 0,
    zMax: 0.1,
    description: 'Gray warehouse boundary after deleting data'
  },
  {
    id: 'base_empty',
    type: 'Layout Zone',
    name: 'White Base Surface',
    xMin: 3,
    yMin: 3,
    xMax: 89,
    yMax: 55,
    zMin: 0.1,
    zMax: 0.14,
    description: 'White base surface after deleting data'
  }
];

const navItems: Array<{ id: Page; label: string; icon: string }> = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'data', label: 'Data Governance', icon: '▣' },
  { id: 'layout', label: 'Layout Strategy', icon: '▤' },
  { id: 'analytics', label: 'Analytics', icon: '⌁' }
];

const editableLocationTypes: LocationType[] = ['Boundary', 'Layout Zone', 'Shop', 'Path', 'Gate'];

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

    if (!isSupportedDataFile(file)) {
      setDataError('Please upload a CSV or Excel file using the location schema.');
      return;
    }

    const reader = new FileReader();

    reader.onload = () => {
      const parsed = file.name.toLowerCase().endsWith('.csv')
        ? parseLocationsCsv(String(reader.result ?? ''))
        : parseWorkbookLocationsFromBuffer(reader.result as ArrayBuffer);

      if (parsed.length === 0) {
        setDataError('No valid location rows were found in this file.');
        return;
      }

      setUploadedLocations(parsed);
      setUploadedFileName(file.name);
      setActivePage('layout');
      persistLocations(parsed, file.name);
    };

    reader.onerror = () => setDataError('The file could not be read.');

    if (file.name.toLowerCase().endsWith('.csv')) {
      reader.readAsText(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  }

  function handleDeleteDataset() {
    setUploadedLocations(emptyWarehouseLocations);
    setUploadedFileName('empty-warehouse.csv');
    setDataError(null);
    selection.setHoveredLocationId(null);
    selection.setSelectedLocationId(null);
    persistLocations(emptyWarehouseLocations, 'empty-warehouse.csv');
  }

  function handleDeleteRow(locationId: string) {
    setUploadedLocations((current) => {
      const source = current ?? locations;
      const nextLocations = source.filter((location) => location.id !== locationId);
      const nextFileName = uploadedFileName ?? 'edited-layout.csv';

      persistLocations(nextLocations, nextFileName);
      setUploadedFileName((currentName) => currentName ?? 'edited-layout.csv');

      return nextLocations;
    });
  }

  function handleAddShopRow() {
    setUploadedLocations((current) => {
      const source = current ?? locations;
      const nextShopNumber = source.filter((location) => location.type === 'Shop').length + 1;
      const nextLocation: Location = {
        id: uniqueLocationId(source, `shop_${nextShopNumber}`),
        type: 'Shop',
        name: `New Shop ${nextShopNumber}`,
        xMin: 6,
        yMin: 6,
        xMax: 14,
        yMax: 12,
        zMin: 0.14,
        zMax: 3.4,
        description: 'New uploaded shop'
      };
      const nextLocations = [...source, nextLocation];
      const nextFileName = uploadedFileName ?? 'edited-layout.csv';

      persistLocations(nextLocations, nextFileName);
      setUploadedFileName((currentName) => currentName ?? 'edited-layout.csv');

      return nextLocations;
    });
  }

  function handleUpdateRow(locationId: string, patch: Partial<Location>) {
    setUploadedLocations((current) => {
      const source = current ?? locations;
      const nextLocations = source.map((location) => (location.id === locationId ? { ...location, ...patch } : location));
      const nextFileName = uploadedFileName ?? 'edited-layout.csv';

      persistLocations(nextLocations, nextFileName);
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
            onAddShopRow={handleAddShopRow}
            onUpdateRow={handleUpdateRow}
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
  onDeleteRow,
  onAddShopRow,
  onUpdateRow
}: {
  locations: Location[];
  uploadedFileName: string | null;
  dataError: string | null;
  loading: boolean;
  error: string | null;
  onUpload: (file: File) => void;
  onDeleteDataset: () => void;
  onDeleteRow: (locationId: string) => void;
  onAddShopRow: () => void;
  onUpdateRow: (locationId: string, patch: Partial<Location>) => void;
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
        <input accept=".csv,.xlsx,.xls,text/csv" hidden onChange={handleFileChange} ref={inputRef} type="file" />
        <button type="button" onClick={() => inputRef.current?.click()}>
          Upload .csv/.xlsx
        </button>
        <button className="danger-button" type="button" onClick={onDeleteDataset}>
          Delete Data
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
            <button type="button" onClick={onAddShopRow}>
              + Add Shop Row
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
                    <td>
                      <input value={location.id} onChange={(event) => onUpdateRow(location.id, { id: event.target.value })} />
                    </td>
                    <td>
                      <select
                        value={location.type}
                        onChange={(event) => onUpdateRow(location.id, { type: event.target.value as LocationType })}
                      >
                        {editableLocationTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <input value={location.name} onChange={(event) => onUpdateRow(location.id, { name: event.target.value })} />
                    </td>
                    <td>
                      <NumberCell location={location} field="xMin" onUpdateRow={onUpdateRow} />
                    </td>
                    <td>
                      <NumberCell location={location} field="yMin" onUpdateRow={onUpdateRow} />
                    </td>
                    <td>
                      <NumberCell location={location} field="zMin" onUpdateRow={onUpdateRow} />
                    </td>
                    <td>
                      <NumberCell location={location} field="xMax" onUpdateRow={onUpdateRow} />
                    </td>
                    <td>
                      <NumberCell location={location} field="yMax" onUpdateRow={onUpdateRow} />
                    </td>
                    <td>
                      <NumberCell location={location} field="zMax" onUpdateRow={onUpdateRow} />
                    </td>
                    <td>
                      <input
                        value={location.description ?? ''}
                        onChange={(event) => onUpdateRow(location.id, { description: event.target.value })}
                      />
                    </td>
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

function NumberCell({
  location,
  field,
  onUpdateRow
}: {
  location: Location;
  field: 'xMin' | 'yMin' | 'zMin' | 'xMax' | 'yMax' | 'zMax';
  onUpdateRow: (locationId: string, patch: Partial<Location>) => void;
}) {
  return (
    <input
      type="number"
      value={location[field]}
      onChange={(event) => onUpdateRow(location.id, { [field]: numberInputValue(event.target.value) })}
    />
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

function persistLocations(locations: Location[], fileName: string) {
  window.localStorage.setItem(uploadedCsvStorageKey, locationsToCsv(locations));
  window.localStorage.setItem(uploadedNameStorageKey, fileName);
}

function uniqueLocationId(locations: Location[], preferredId: string) {
  const ids = new Set(locations.map((location) => location.id));

  if (!ids.has(preferredId)) {
    return preferredId;
  }

  let suffix = 2;
  while (ids.has(`${preferredId}_${suffix}`)) {
    suffix += 1;
  }

  return `${preferredId}_${suffix}`;
}

function numberInputValue(value: string) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function isSupportedDataFile(file: File) {
  const name = file.name.toLowerCase();
  return name.endsWith('.csv') || name.endsWith('.xlsx') || name.endsWith('.xls');
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
