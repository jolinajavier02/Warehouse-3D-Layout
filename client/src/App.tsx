import { useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react';
import MapContainer from './components/map/MapContainer';
import { useLocations } from './hooks/useLocations';
import { useMapSelection } from './hooks/useMapSelection';
import { parseLocationsCsv } from './services/csvLocations';
import { parseWorkbookLocationsFromBuffer } from './services/workbookLocations';
import type { Location, LocationType } from './types/location';

type Page = 'home' | 'data' | 'layout' | 'analytics';
type ShapePresetId = 'square' | 'rectangle' | 'long-rectangle' | 'circle' | 'oblong' | 'animal-shape';
type SignPresetId = 'entrance' | 'exit' | 'cr' | 'way';

const uploadedCsvStorageKey = 'warehouse-layout-uploaded-csv-v3-plan-overlay';
const uploadedNameStorageKey = 'warehouse-layout-uploaded-name-v3-plan-overlay';
const obsoleteStorageKeys = [
  'warehouse-layout-uploaded-csv',
  'warehouse-layout-uploaded-name',
  'warehouse-layout-uploaded-csv-v2-dimensions',
  'warehouse-layout-uploaded-name-v2-dimensions'
];

const navItems: Array<{ id: Page; label: string; icon: string }> = [
  { id: 'home', label: 'Home', icon: '⌂' },
  { id: 'data', label: 'Data Governance', icon: '▣' },
  { id: 'layout', label: 'Layout Strategy', icon: '▤' },
  { id: 'analytics', label: 'Analytics', icon: '⌁' }
];

const editableLocationTypes: LocationType[] = ['Boundary', 'Layout Zone', 'Shop', 'Path', 'Gate'];

const shapePresets: Array<{ id: ShapePresetId; label: string; width: number; depth: number; height: number; description: string }> = [
  { id: 'square', label: 'Square', width: 8, depth: 8, height: 3.4, description: 'Shape: Square shop block' },
  { id: 'rectangle', label: 'Rectangle', width: 11, depth: 7, height: 3.4, description: 'Shape: Rectangle shop block' },
  { id: 'long-rectangle', label: 'Long Rectangle', width: 18, depth: 5, height: 3.4, description: 'Shape: Long rectangle shop block' },
  { id: 'circle', label: 'Circle', width: 8, depth: 8, height: 3.4, description: 'Shape: Circle shop block' },
  { id: 'oblong', label: 'Oblong', width: 14, depth: 6, height: 3.4, description: 'Shape: Oblong shop block' },
  { id: 'animal-shape', label: 'Animal Shape', width: 10, depth: 8, height: 3.4, description: 'Shape: Animal shop block' }
];

const signPresets: Array<{ id: SignPresetId; label: string; name: string; description: string }> = [
  { id: 'entrance', label: 'Entrance', name: 'Entrance', description: 'Warehouse entrance sign' },
  { id: 'exit', label: 'Exit', name: 'Exit', description: 'Exit sign' },
  { id: 'cr', label: 'CR', name: 'CR', description: 'Restroom CR bathroom sign' },
  { id: 'way', label: 'Way', name: 'Way', description: 'Way sign for shop lane' }
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
    obsoleteStorageKeys.forEach((key) => window.localStorage.removeItem(key));

    const savedCsv = window.localStorage.getItem(uploadedCsvStorageKey);
    const savedName = window.localStorage.getItem(uploadedNameStorageKey);

    if (savedCsv === null) {
      return;
    }

    const parsed = parseLocationsCsv(savedCsv);
    setUploadedLocations(parsed);
    setUploadedFileName(savedName || 'uploaded-layout.csv');
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

  function handleDeleteRow(locationId: string) {
    setUploadedLocations((current) => {
      const source = current ?? locations;
      const nextLocations = source.filter((location) => location.id !== locationId);
      const nextFileName = uploadedFileName ?? 'edited-layout.csv';

      persistLocations(nextLocations, nextFileName);
      setUploadedFileName((currentName) => currentName ?? 'edited-layout.csv');
      selection.setHoveredLocationId(null);
      selection.setSelectedLocationId(null);

      return nextLocations;
    });
  }

  function handleAddShopRow() {
    setUploadedLocations((current) => {
      const source = current ?? locations;
      const nextShopNumber = source.filter((location) => location.type === 'Shop').length + 1;
      const bounds = findAvailableShopBounds(source, 8, 6);
      const nextLocation: Location = {
        id: uniqueLocationId(source, `shop_${nextShopNumber}`),
        type: 'Shop',
        name: `New Shop ${nextShopNumber}`,
        xMin: bounds.xMin,
        yMin: bounds.yMin,
        xMax: bounds.xMax,
        yMax: bounds.yMax,
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

  function handleAddLayoutShape(presetId: ShapePresetId) {
    const preset = shapePresets.find((item) => item.id === presetId);

    if (!preset) {
      return;
    }

    setUploadedLocations((current) => {
      const source = current ?? locations;
      const nextShopNumber = source.filter((location) => location.type === 'Shop').length + 1;
      const bounds = findAvailableShopBounds(source, preset.width, preset.depth);
      const nextLocation: Location = {
        id: uniqueLocationId(source, `${preset.id.replace(/-/g, '_')}_${nextShopNumber}`),
        type: 'Shop',
        name: `${preset.label} Shop ${nextShopNumber}`,
        xMin: bounds.xMin,
        yMin: bounds.yMin,
        xMax: bounds.xMax,
        yMax: bounds.yMax,
        zMin: 0.14,
        zMax: preset.height,
        description: preset.description
      };
      const nextLocations = [...source, nextLocation];
      const nextFileName = uploadedFileName ?? 'edited-layout.csv';

      persistLocations(nextLocations, nextFileName);
      setUploadedFileName((currentName) => currentName ?? 'edited-layout.csv');

      return nextLocations;
    });
  }

  function handleAddLayoutSign(presetId: SignPresetId) {
    const preset = signPresets.find((item) => item.id === presetId);

    if (!preset) {
      return;
    }

    setUploadedLocations((current) => {
      const source = current ?? locations;
      const nextSignNumber = source.filter((location) => location.type === 'Gate').length + 1;
      const bounds = findAvailableShopBounds(source, 2.4, 1.8);
      const nextLocation: Location = {
        id: uniqueLocationId(source, `${preset.id}_sign_${nextSignNumber}`),
        type: 'Gate',
        name: preset.name,
        xMin: bounds.xMin,
        yMin: bounds.yMin,
        xMax: bounds.xMax,
        yMax: bounds.yMax,
        zMin: 0.14,
        zMax: 1.8,
        description: preset.description
      };
      const nextLocations = [...source, nextLocation];
      const nextFileName = uploadedFileName ?? 'edited-layout.csv';

      persistLocations(nextLocations, nextFileName);
      setUploadedFileName((currentName) => currentName ?? 'edited-layout.csv');

      return nextLocations;
    });
  }

  function handleAddCustomLayoutShape(width: number, depth: number, height: number) {
    const safeWidth = Math.max(width, 1);
    const safeDepth = Math.max(depth, 1);
    const safeHeight = Math.max(height, 0.5);

    setUploadedLocations((current) => {
      const source = current ?? locations;
      const nextShopNumber = source.filter((location) => location.type === 'Shop').length + 1;
      const bounds = findAvailableShopBounds(source, safeWidth, safeDepth);
      const nextLocation: Location = {
        id: uniqueLocationId(source, `custom_shop_${nextShopNumber}`),
        type: 'Shop',
        name: `Custom Shop ${nextShopNumber}`,
        xMin: bounds.xMin,
        yMin: bounds.yMin,
        xMax: bounds.xMax,
        yMax: bounds.yMax,
        zMin: 0.14,
        zMax: safeHeight,
        description: `Shape: Custom shop block ${safeWidth} x ${safeDepth} x ${safeHeight}`
      };
      const nextLocations = [...source, nextLocation];
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
            onAddShape={handleAddLayoutShape}
            onAddCustomShape={handleAddCustomLayoutShape}
            onAddSign={handleAddLayoutSign}
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
  onDeleteRow: (locationId: string) => void;
  onAddShopRow: () => void;
  onUpdateRow: (locationId: string, patch: Partial<Location>) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);

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
          Upload Data
        </button>
      </div>

      <div className="data-workspace">
        <section className="data-table-panel">
          <div className="table-toolbar">
            <button type="button" onClick={onAddShopRow}>
              + Add Shop Row
            </button>
            <p>
              {dataError || error || (loading ? 'Loading default layout...' : 'Uploaded data is local and becomes the source for the 3D map.')}
            </p>
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
            {locations.length === 0 && <div className="empty-data-state">No data rows. Upload data to build the 3D map.</div>}
          </div>
        </section>
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
  uploadedFileName,
  onAddShape,
  onAddCustomShape,
  onAddSign
}: {
  locations: Location[];
  loading: boolean;
  error: string | null;
  selection: ReturnType<typeof useMapSelection>;
  uploadedFileName: string | null;
  onAddShape: (presetId: ShapePresetId) => void;
  onAddCustomShape: (width: number, depth: number, height: number) => void;
  onAddSign: (presetId: SignPresetId) => void;
}) {
  const [customWidth, setCustomWidth] = useState(9);
  const [customDepth, setCustomDepth] = useState(6);
  const [customHeight, setCustomHeight] = useState(3.4);

  return (
    <section className="layout-map-stage" aria-label="Layout Strategy">
      <div className="layout-source-pill">{uploadedFileName ? `Using uploaded data: ${uploadedFileName}` : 'Using default CSV data'}</div>
      <aside className="layout-tools" aria-label="Layout creation tools">
        <section>
          <h2>Shapes</h2>
          <div className="tool-button-grid">
            {shapePresets.map((preset) => (
              <button key={preset.id} type="button" onClick={() => onAddShape(preset.id)}>
                <span className={`shape-icon shape-${preset.id}`} aria-hidden="true" />
                <span>{preset.label}</span>
                <small>
                  {preset.width} x {preset.depth}
                </small>
              </button>
            ))}
          </div>
          <div className="custom-size-tool">
            <label>
              W
              <input type="number" min="1" value={customWidth} onChange={(event) => setCustomWidth(numberInputValue(event.target.value))} />
            </label>
            <label>
              D
              <input type="number" min="1" value={customDepth} onChange={(event) => setCustomDepth(numberInputValue(event.target.value))} />
            </label>
            <label>
              H
              <input type="number" min="0.5" step="0.1" value={customHeight} onChange={(event) => setCustomHeight(numberInputValue(event.target.value))} />
            </label>
            <button type="button" onClick={() => onAddCustomShape(customWidth, customDepth, customHeight)}>
              Add Custom
            </button>
          </div>
        </section>
        <section>
          <h2>Signs</h2>
          <div className="tool-button-grid sign-grid">
            {signPresets.map((preset) => (
              <button key={preset.id} type="button" onClick={() => onAddSign(preset.id)}>
                <span className={`sign-icon sign-${preset.id}`}>{preset.label.slice(0, 2).toUpperCase()}</span>
                <span>{preset.label}</span>
              </button>
            ))}
          </div>
        </section>
      </aside>
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

function findAvailableShopBounds(locations: Location[], width: number, depth: number) {
  const container = findPlacementContainer(locations, width, depth);
  const occupied = locations
    .filter((location) => location.type !== 'Boundary' && location.type !== 'Layout Zone' && location.type !== 'Path')
    .map(normalizedBounds2d);
  const gap = 1.2;
  const step = 1;
  const xStart = container.xMin + gap;
  const yStart = container.yMin + gap;
  const xLimit = container.xMax - width - gap;
  const yLimit = container.yMax - depth - gap;

  for (let y = yStart; y <= yLimit; y += step) {
    for (let x = xStart; x <= xLimit; x += step) {
      const candidate = {
        xMin: roundCoordinate(x),
        yMin: roundCoordinate(y),
        xMax: roundCoordinate(x + width),
        yMax: roundCoordinate(y + depth)
      };

      if (!occupied.some((block) => rectanglesOverlap(candidate, block, gap))) {
        return candidate;
      }
    }
  }

  const fallbackX = Math.max(container.xMin + gap, maxX(occupied) + gap);
  const fallbackY = yStart;

  return {
    xMin: roundCoordinate(fallbackX),
    yMin: roundCoordinate(fallbackY),
    xMax: roundCoordinate(fallbackX + width),
    yMax: roundCoordinate(fallbackY + depth)
  };
}

function findPlacementContainer(locations: Location[], width: number, depth: number) {
  const candidates = locations
    .filter((location) => location.type === 'Layout Zone' || location.type === 'Boundary')
    .map(normalizedBounds2d)
    .filter((bounds) => bounds.xMax - bounds.xMin >= width + 2 && bounds.yMax - bounds.yMin >= depth + 2)
    .sort((a, b) => rectangleArea(b) - rectangleArea(a));

  if (candidates.length > 0) {
    return candidates[0];
  }

  if (locations.length === 0) {
    return { xMin: 0, yMin: 0, xMax: width + 4, yMax: depth + 4 };
  }

  const bounds = locations.map(normalizedBounds2d);
  return {
    xMin: Math.min(...bounds.map((location) => location.xMin)),
    yMin: Math.min(...bounds.map((location) => location.yMin)),
    xMax: Math.max(...bounds.map((location) => location.xMax)) + width + 4,
    yMax: Math.max(...bounds.map((location) => location.yMax)) + depth + 4
  };
}

function normalizedBounds2d(location: Pick<Location, 'xMin' | 'yMin' | 'xMax' | 'yMax'>) {
  return {
    xMin: Math.min(location.xMin, location.xMax),
    yMin: Math.min(location.yMin, location.yMax),
    xMax: Math.max(location.xMin, location.xMax),
    yMax: Math.max(location.yMin, location.yMax)
  };
}

function rectanglesOverlap(
  first: ReturnType<typeof normalizedBounds2d>,
  second: ReturnType<typeof normalizedBounds2d>,
  gap: number
) {
  return !(
    first.xMax + gap <= second.xMin ||
    first.xMin - gap >= second.xMax ||
    first.yMax + gap <= second.yMin ||
    first.yMin - gap >= second.yMax
  );
}

function rectangleArea(bounds: ReturnType<typeof normalizedBounds2d>) {
  return (bounds.xMax - bounds.xMin) * (bounds.yMax - bounds.yMin);
}

function maxX(bounds: Array<ReturnType<typeof normalizedBounds2d>>) {
  return bounds.length > 0 ? Math.max(...bounds.map((location) => location.xMax)) : 0;
}

function roundCoordinate(value: number) {
  return Math.round(value * 100) / 100;
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
