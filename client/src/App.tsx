import { useEffect, useMemo, useRef, useState, type ChangeEvent } from 'react';
import MapContainer from './components/map/MapContainer';
import { useLocations } from './hooks/useLocations';
import { useMapSelection } from './hooks/useMapSelection';
import { parseLocationsCsv } from './services/csvLocations';
import { parseWorkbookLocationsFromBuffer } from './services/workbookLocations';
import type { Location, LocationType } from './types/location';

type Page = 'home' | 'data' | 'layout' | 'builder' | 'analytics';
type ShapePresetId = 'square' | 'rectangle' | 'long-rectangle' | 'circle' | 'oblong' | 'animal-shape';
type SignPresetId = 'entrance' | 'exit' | 'cr' | 'fire-exit' | 'fire-extinguisher' | 'gate' | 'way' | 'partition' | 'gap';
type DecorationPresetId = 'animal-character' | 'tree' | 'person-walking' | 'person-standing' | 'chair-setup';
type BuilderTool = 'shapes' | 'signs' | 'label' | 'color' | 'decorations' | 'delete';

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
  { id: 'fire-exit', label: 'Fire Exit', name: 'Fire Exit', description: 'Fire exit sign' },
  { id: 'fire-extinguisher', label: 'Fire Extinguisher', name: 'Fire Extinguisher', description: 'Fire extinguisher sign' },
  { id: 'cr', label: 'CR', name: 'CR', description: 'Restroom CR bathroom sign' },
  { id: 'gate', label: 'Gate', name: 'Gate', description: 'Gate sign' },
  { id: 'way', label: 'Way', name: 'Way', description: 'Way sign for shop lane' },
  { id: 'partition', label: 'Partition', name: 'Partition', description: 'Partition sign' },
  { id: 'gap', label: 'Gap', name: 'Gap', description: 'Gap sign' }
];

const decorationPresets: Array<{ id: DecorationPresetId; label: string; width: number; depth: number; height: number; description: string }> = [
  { id: 'animal-character', label: 'Animal Character', width: 5, depth: 4, height: 2.8, description: 'Decoration: Animal character Shape: Animal' },
  { id: 'tree', label: 'Tree', width: 3, depth: 3, height: 4.2, description: 'Decoration: Tree' },
  { id: 'person-walking', label: 'Person Walking', width: 2.2, depth: 1.4, height: 3.2, description: 'Decoration: Person walking' },
  { id: 'person-standing', label: 'Person Standing', width: 1.6, depth: 1.6, height: 3.2, description: 'Decoration: Person standing' },
  { id: 'chair-setup', label: 'Chair Setup', width: 5, depth: 4, height: 1.2, description: 'Decoration: Chair setup' }
];

const colorTargets = [
  { label: 'Selected', value: 'selected' },
  { label: 'Blocks', value: 'blocks' },
  { label: 'Lines', value: 'lines' },
  { label: 'Boundary', value: 'boundary' },
  { label: 'Surface', value: 'surface' }
];

export default function App() {
  const { locations: defaultLocations, loading, error } = useLocations();
  const [activePage, setActivePage] = useState<Page>('home');
  const [uploadedLocations, setUploadedLocations] = useState<Location[] | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);
  const [dataError, setDataError] = useState<string | null>(null);
  const [layoutHistory, setLayoutHistory] = useState<Location[][]>([]);
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
      const nextLocations = appendLayoutItem(source, nextLocation);
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
      setLayoutHistory((history) => [source, ...history].slice(0, 30));
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
      const nextLocations = appendLayoutItem(source, nextLocation);
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
      setLayoutHistory((history) => [source, ...history].slice(0, 30));
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
      const nextLocations = appendLayoutItem(source, nextLocation);
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
      setLayoutHistory((history) => [source, ...history].slice(0, 30));
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
      const nextLocations = appendLayoutItem(source, nextLocation);
      const nextFileName = uploadedFileName ?? 'edited-layout.csv';

      persistLocations(nextLocations, nextFileName);
      setUploadedFileName((currentName) => currentName ?? 'edited-layout.csv');

      return nextLocations;
    });
  }

  function handleApplyCustomContainer(type: 'Boundary' | 'Layout Zone', width: number, depth: number) {
    const safeWidth = Math.max(width, 2);
    const safeDepth = Math.max(depth, 2);

    updateLayoutWithHistory((source) => upsertPlanContainer(source, type, safeWidth, safeDepth));
  }

  function handleAddDecoration(presetId: DecorationPresetId) {
    const preset = decorationPresets.find((item) => item.id === presetId);

    if (!preset) {
      return;
    }

    setUploadedLocations((current) => {
      const source = current ?? locations;
      setLayoutHistory((history) => [source, ...history].slice(0, 30));
      const nextDecorationNumber = source.filter((location) => location.description?.includes('Decoration:')).length + 1;
      const bounds = findAvailableShopBounds(source, preset.width, preset.depth);
      const nextLocation: Location = {
        id: uniqueLocationId(source, `${preset.id.replace(/-/g, '_')}_${nextDecorationNumber}`),
        type: 'Shop',
        name: `${preset.label} ${nextDecorationNumber}`,
        xMin: bounds.xMin,
        yMin: bounds.yMin,
        xMax: bounds.xMax,
        yMax: bounds.yMax,
        zMin: 0.14,
        zMax: preset.height,
        description: preset.description
      };
      const nextLocations = appendLayoutItem(source, nextLocation);
      const nextFileName = uploadedFileName ?? 'edited-layout.csv';

      persistLocations(nextLocations, nextFileName);
      setUploadedFileName((currentName) => currentName ?? 'edited-layout.csv');

      return nextLocations;
    });
  }

  function handleApplyLabel(locationId: string | null, label: string) {
    if (!locationId || label.trim().length === 0) {
      return;
    }

    updateLayoutWithHistory((source) => source.map((location) => (location.id === locationId ? { ...location, name: label.trim() } : location)));
  }

  function handleApplyColor(target: string, color: string) {
    updateLayoutWithHistory((source) =>
      source.map((location) => {
        const shouldApply =
          (target === 'selected' && location.id === selection.selectedLocationId) ||
          (target === 'blocks' && location.type === 'Shop') ||
          (target === 'lines' && location.type === 'Path') ||
          (target === 'boundary' && location.type === 'Boundary') ||
          (target === 'surface' && location.type === 'Layout Zone');

        return shouldApply ? { ...location, description: withDescriptionMeta(location.description, 'Color', color) } : location;
      })
    );
  }

  function handleDeleteSelectedBlock() {
    const locationId = selection.selectedLocationId;

    if (!locationId) {
      return;
    }

    updateLayoutWithHistory((source) => source.filter((location) => location.id !== locationId));
    selection.setSelectedLocationId(null);
    selection.setHoveredLocationId(null);
  }

  function handleUndoLayoutChange() {
    const [previous, ...rest] = layoutHistory;

    if (!previous) {
      return;
    }

    const nextFileName = uploadedFileName ?? 'edited-layout.csv';
    setUploadedLocations(previous);
    persistLocations(previous, nextFileName);
    setUploadedFileName((currentName) => currentName ?? 'edited-layout.csv');
    setLayoutHistory(rest);
  }

  function updateLayoutWithHistory(updater: (source: Location[]) => Location[]) {
    setUploadedLocations((current) => {
      const source = current ?? locations;
      const nextLocations = updater(source);
      const nextFileName = uploadedFileName ?? 'edited-layout.csv';

      setLayoutHistory((history) => [source, ...history].slice(0, 30));
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
              className={activePage === item.id || (activePage === 'builder' && item.id === 'layout') ? 'active' : ''}
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
            onOpenBuilder={() => setActivePage('builder')}
          />
        )}
        {activePage === 'builder' && (
          <LayoutBuilderPage
            locations={locations}
            loading={loading}
            error={error}
            selection={selection}
            canUndo={layoutHistory.length > 0}
            onAddShape={handleAddLayoutShape}
            onAddCustomShape={handleAddCustomLayoutShape}
            onApplyCustomContainer={handleApplyCustomContainer}
            onAddSign={handleAddLayoutSign}
            onAddDecoration={handleAddDecoration}
            onApplyLabel={handleApplyLabel}
            onApplyColor={handleApplyColor}
            onDeleteSelected={handleDeleteSelectedBlock}
            onUndo={handleUndoLayoutChange}
            onSave={() => setActivePage('layout')}
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
  onOpenBuilder
}: {
  locations: Location[];
  loading: boolean;
  error: string | null;
  selection: ReturnType<typeof useMapSelection>;
  uploadedFileName: string | null;
  onOpenBuilder: () => void;
}) {
  return (
    <section className="layout-map-stage" aria-label="Layout Strategy">
      <div className="layout-source-pill">{uploadedFileName ? `Using uploaded data: ${uploadedFileName}` : 'Using default CSV data'}</div>
      <button className="add-layout-button" type="button" onClick={onOpenBuilder}>
        + Add Layout
      </button>
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

function LayoutBuilderPage({
  locations,
  loading,
  error,
  selection,
  canUndo,
  onAddShape,
  onAddCustomShape,
  onApplyCustomContainer,
  onAddSign,
  onAddDecoration,
  onApplyLabel,
  onApplyColor,
  onDeleteSelected,
  onUndo,
  onSave
}: {
  locations: Location[];
  loading: boolean;
  error: string | null;
  selection: ReturnType<typeof useMapSelection>;
  canUndo: boolean;
  onAddShape: (presetId: ShapePresetId) => void;
  onAddCustomShape: (width: number, depth: number, height: number) => void;
  onApplyCustomContainer: (type: 'Boundary' | 'Layout Zone', width: number, depth: number) => void;
  onAddSign: (presetId: SignPresetId) => void;
  onAddDecoration: (presetId: DecorationPresetId) => void;
  onApplyLabel: (locationId: string | null, label: string) => void;
  onApplyColor: (target: string, color: string) => void;
  onDeleteSelected: () => void;
  onUndo: () => void;
  onSave: () => void;
}) {
  const [activeTool, setActiveTool] = useState<BuilderTool>('shapes');
  const [customWidth, setCustomWidth] = useState(9);
  const [customDepth, setCustomDepth] = useState(6);
  const [customHeight, setCustomHeight] = useState(3.4);
  const [labelText, setLabelText] = useState('');
  const [colorTarget, setColorTarget] = useState('selected');
  const [colorValue, setColorValue] = useState('#2563eb');
  const selectedLocation = locations.find((location) => location.id === selection.selectedLocationId) ?? null;

  return (
    <section className="layout-builder-page" aria-label="Add Layout">
      <header className="builder-header">
        <div>
          <h2>Add Layout</h2>
          <p>{selectedLocation ? `Selected: ${selectedLocation.name}` : 'Select a block to edit label, color, or delete.'}</p>
        </div>
        <div className="builder-actions">
          <button type="button" onClick={onUndo} disabled={!canUndo}>
            Undo
          </button>
          <button className="primary-save" type="button" onClick={onSave}>
            Save
          </button>
        </div>
      </header>
      <div className="builder-map">
        <MapContainer
          locations={locations}
          selectedLocationId={selection.selectedLocationId}
          hoveredLocationId={selection.hoveredLocationId}
          searchedLocationIds={[]}
          onHoverLocation={selection.setHoveredLocationId}
          onSelectLocation={selection.setSelectedLocationId}
          staticView
        />
        {activeTool === 'delete' && selectedLocation && (
          <button className="map-delete-fab" type="button" onClick={onDeleteSelected} aria-label={`Delete ${selectedLocation.name}`}>
            ×
          </button>
        )}
        {loading && <div className="map-status">Loading layout...</div>}
        {error && <div className="map-status map-status-error">{error}</div>}
      </div>
      <section className="builder-toolbar" aria-label="Builder tools">
        <div className="builder-tabs">
          {(['shapes', 'signs', 'label', 'color', 'decorations', 'delete'] as BuilderTool[]).map((tool) => (
            <button className={activeTool === tool ? 'active' : ''} key={tool} type="button" onClick={() => setActiveTool(tool)}>
              {tool}
            </button>
          ))}
        </div>
        <div className="builder-panel">
          {activeTool === 'shapes' && (
            <>
              <h3>Shapes</h3>
              <p>Pick a shape and it will be placed in an open area with spacing.</p>
              <div className="tool-button-grid wide-tools">
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
                <button type="button" onClick={() => onApplyCustomContainer('Boundary', customWidth, customDepth)}>
                  Set Boundary
                </button>
                <button type="button" onClick={() => onApplyCustomContainer('Layout Zone', customWidth, customDepth)}>
                  Set Surface
                </button>
              </div>
            </>
          )}
          {activeTool === 'signs' && (
            <>
              <h3>Signs</h3>
              <div className="tool-button-grid wide-tools sign-grid">
                {signPresets.map((preset) => (
                  <button key={preset.id} type="button" onClick={() => onAddSign(preset.id)}>
                    <span className={`sign-icon sign-${preset.id}`}>{preset.label.slice(0, 2).toUpperCase()}</span>
                    <span>{preset.label}</span>
                  </button>
                ))}
              </div>
            </>
          )}
          {activeTool === 'label' && (
            <>
              <h3>Label</h3>
              <div className="builder-inline-form">
                <input placeholder="Block label" value={labelText} onChange={(event) => setLabelText(event.target.value)} />
                <button type="button" onClick={() => onApplyLabel(selection.selectedLocationId, labelText)}>
                  Apply Label
                </button>
              </div>
            </>
          )}
          {activeTool === 'color' && (
            <>
              <h3>Color</h3>
              <div className="builder-inline-form">
                <select value={colorTarget} onChange={(event) => setColorTarget(event.target.value)}>
                  {colorTargets.map((target) => (
                    <option key={target.value} value={target.value}>
                      {target.label}
                    </option>
                  ))}
                </select>
                <input type="color" value={colorValue} onChange={(event) => setColorValue(event.target.value)} />
                <button type="button" onClick={() => onApplyColor(colorTarget, colorValue)}>
                  Apply Color
                </button>
              </div>
            </>
          )}
          {activeTool === 'decorations' && (
            <>
              <h3>Decorations</h3>
              <div className="tool-button-grid wide-tools">
                {decorationPresets.map((preset) => (
                  <button key={preset.id} type="button" onClick={() => onAddDecoration(preset.id)}>
                    <span className={`shape-icon decoration-${preset.id}`} aria-hidden="true" />
                    <span>{preset.label}</span>
                    <small>
                      {preset.width} x {preset.depth}
                    </small>
                  </button>
                ))}
              </div>
            </>
          )}
          {activeTool === 'delete' && (
            <>
              <h3>Delete Block</h3>
              <div className="builder-inline-form">
                <span>{selectedLocation ? selectedLocation.name : 'Click a block on the map first.'}</span>
                <button className="danger-action" type="button" disabled={!selectedLocation} onClick={onDeleteSelected}>
                  Delete Selected
                </button>
              </div>
            </>
          )}
        </div>
      </section>
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

function appendLayoutItem(locations: Location[], item: Location) {
  const itemBounds = normalizedBounds2d(item);
  const hasBoundary = locations.some((location) => location.type === 'Boundary');
  const hasSurface = locations.some((location) => location.type === 'Layout Zone');
  const seededLocations = [
    ...(!hasBoundary ? [createPlanContainer('boundary_auto', 'Boundary', itemBounds)] : []),
    ...(!hasSurface ? [createPlanContainer('surface_auto', 'Layout Zone', itemBounds)] : []),
    ...locations,
    item
  ];

  return expandPlanForItem(seededLocations, item);
}

function createPlanContainer(id: string, type: 'Boundary' | 'Layout Zone', bounds: ReturnType<typeof normalizedBounds2d>): Location {
  return {
    id,
    type,
    name: type === 'Boundary' ? 'Boundary' : 'Surface',
    xMin: bounds.xMin - 4,
    yMin: bounds.yMin - 4,
    xMax: bounds.xMax + 4,
    yMax: bounds.yMax + 4,
    zMin: 0,
    zMax: type === 'Boundary' ? 0.18 : 0.1,
    description: type === 'Boundary' ? 'Auto-expanded boundary' : 'Auto-expanded surface'
  };
}

function upsertPlanContainer(locations: Location[], type: 'Boundary' | 'Layout Zone', width: number, depth: number) {
  const existing = locations.find((location) => location.type === type);
  const allBounds = locations.length > 0 ? boundsForLocations(locations) : null;
  const centerX = existing
    ? (existing.xMin + existing.xMax) / 2
    : allBounds
      ? (allBounds.xMin + allBounds.xMax) / 2
      : width / 2;
  const centerY = existing
    ? (existing.yMin + existing.yMax) / 2
    : allBounds
      ? (allBounds.yMin + allBounds.yMax) / 2
      : depth / 2;
  const nextContainer: Location = {
    id: existing?.id ?? (type === 'Boundary' ? 'boundary_custom' : 'surface_custom'),
    type,
    name: type === 'Boundary' ? 'Boundary' : 'Surface',
    xMin: roundCoordinate(centerX - width / 2),
    yMin: roundCoordinate(centerY - depth / 2),
    xMax: roundCoordinate(centerX + width / 2),
    yMax: roundCoordinate(centerY + depth / 2),
    zMin: 0,
    zMax: type === 'Boundary' ? 0.18 : 0.1,
    description: type === 'Boundary' ? 'Custom boundary' : 'Custom surface'
  };
  const withoutExisting = locations.filter((location) => location.type !== type);

  return type === 'Boundary' ? [nextContainer, ...withoutExisting] : [...withoutExisting, nextContainer];
}

function boundsForLocations(locations: Location[]) {
  const bounds = locations.map(normalizedBounds2d);

  return {
    xMin: Math.min(...bounds.map((location) => location.xMin)),
    yMin: Math.min(...bounds.map((location) => location.yMin)),
    xMax: Math.max(...bounds.map((location) => location.xMax)),
    yMax: Math.max(...bounds.map((location) => location.yMax))
  };
}

function expandPlanForItem(locations: Location[], item: Location) {
  const itemBounds = normalizedBounds2d(item);
  const padding = 4;

  return locations.map((location) => {
    if (location.type !== 'Boundary' && location.type !== 'Layout Zone') {
      return location;
    }

    const bounds = normalizedBounds2d(location);
    const expanded = {
      ...location,
      xMin: Math.min(bounds.xMin, itemBounds.xMin - padding),
      yMin: Math.min(bounds.yMin, itemBounds.yMin - padding),
      xMax: Math.max(bounds.xMax, itemBounds.xMax + padding),
      yMax: Math.max(bounds.yMax, itemBounds.yMax + padding)
    };

    return expanded;
  });
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

function withDescriptionMeta(description: string | undefined, key: string, value: string) {
  const parts = (description ?? '')
    .split(';')
    .map((part) => part.trim())
    .filter((part) => part.length > 0 && !part.toLowerCase().startsWith(`${key.toLowerCase()}:`));

  return [...parts, `${key}: ${value}`].join('; ');
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
