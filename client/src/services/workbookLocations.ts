import type { Location, LocationType } from '../types/location';

const DEFAULT_WORKBOOK_PATH = '/data/20260501_VisualizationInput_v7.xlsx';
const MM_TO_M = 1 / 1000;
const MIN_FOOTPRINT = 0.2;

type WorkbookRow = Record<string, string | number | boolean | null | undefined>;

interface Workbook {
  SheetNames: string[];
  Sheets: Record<string, unknown>;
}

interface SheetJs {
  read: (buffer: ArrayBuffer, options: { type: 'array' }) => Workbook;
  utils: {
    sheet_to_json: (sheet: unknown, options: Record<string, unknown>) => WorkbookRow[];
  };
}

declare global {
  interface Window {
    XLSX?: SheetJs;
  }
}

const facilityTypeLabels: Record<string, LocationType> = {
  boundary: 'Boundary',
  gate: 'Gate',
  'layout area': 'Layout Zone',
  'main aisle': 'Main Aisle',
  'main asile': 'Main Aisle',
  'non-placeable area': 'Non-placeable Area',
  'non placeable area': 'Non-placeable Area',
  'nonplaceable area': 'Non-placeable Area',
  pillar: 'Pillar',
  wall: 'Wall',
  'work area': 'Work Area'
};

const validLocationTypes = new Set<LocationType>([
  'Boundary',
  'Layout Zone',
  'Main Aisle',
  'Work Area',
  'Pillar',
  'Gate',
  'Wall',
  'Non-placeable Area',
  'Shelf',
  'Nestainer',
  'Operation Area',
  'Shop',
  'Path',
  'Dock',
  'Rack',
  'Office'
]);

export async function fetchWorkbookLocations(workbookPath = DEFAULT_WORKBOOK_PATH): Promise<Location[]> {
  if (!window.XLSX) {
    throw new Error('Excel parser is not loaded');
  }

  const response = await fetch(workbookPath, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`Failed to load workbook: ${response.status}`);
  }

  return parseWorkbookLocationsFromBuffer(await response.arrayBuffer());
}

export function parseWorkbookLocationsFromBuffer(buffer: ArrayBuffer): Location[] {
  if (!window.XLSX) {
    throw new Error('Excel parser is not loaded');
  }

  const workbook = window.XLSX.read(buffer, { type: 'array' });
  const sheetRows = Object.fromEntries(
    workbook.SheetNames.map((sheetName) => [sheetName, readSheetRows(workbook, sheetName)])
  );
  const locationSheetRows = workbook.SheetNames.map((sheetName) => sheetRows[sheetName] ?? []).find(hasLocationSchema);

  if (locationSheetRows) {
    return locationSheetRows.map(parseLocationSchemaRow).filter((location) => location !== null);
  }

  return buildLocationsFromWorkbook({
    facilityRows: sheetRows.Facility ?? [],
    materialHandlingRows: sheetRows.MaterialHandling ?? [],
    planRows: sheetRows.Plan ?? [],
    patternRows: sheetRows.PatternResult ?? []
  });
}

function hasLocationSchema(rows: WorkbookRow[]) {
  if (rows.length === 0) {
    return false;
  }

  const keys = new Set(Object.keys(rows[0]));
  return ['id', 'type', 'xmin', 'ymin', 'xmax', 'ymax'].every((key) => keys.has(key));
}

function parseLocationSchemaRow(row: WorkbookRow): Location | null {
  const id = normalizeString(row.id);
  const type = resolveLocationType(row.type);

  if (!id || !type) {
    return null;
  }

  return {
    id,
    type,
    name: normalizeString(row.name) || id,
    xMin: numberValue(row.xmin),
    yMin: numberValue(row.ymin),
    xMax: numberValue(row.xmax),
    yMax: numberValue(row.ymax),
    zMin: numberValue(row.zmin),
    zMax: row.zmax == null || row.zmax === '' ? numberValue(row.zmin) + defaultHeight(type) : numberValue(row.zmax),
    description: normalizeString(row.description) || undefined
  };
}

function resolveLocationType(value: unknown): LocationType | null {
  const normalized = normalizeString(value).toLowerCase().replace(/[\s_-]+/g, '');
  const matched = [...validLocationTypes].find((type) => type.toLowerCase().replace(/[\s_-]+/g, '') === normalized);

  return matched ?? null;
}

function readSheetRows(workbook: Workbook, sheetName: string): WorkbookRow[] {
  const sheet = workbook.Sheets[sheetName];

  if (!sheet || !window.XLSX) {
    return [];
  }

  return window.XLSX.utils
    .sheet_to_json(sheet, {
      defval: '',
      raw: false,
      blankrows: false
    })
    .filter((row) => Object.values(row).some((value) => String(value ?? '').trim() !== ''))
    .map(normalizeRowKeys);
}

function normalizeRowKeys(row: WorkbookRow): WorkbookRow {
  const normalized: WorkbookRow = {};

  Object.entries(row).forEach(([key, value]) => {
    normalized[key.toLowerCase().replace(/\s+/g, '')] = value;
  });

  return normalized;
}

function buildLocationsFromWorkbook({
  facilityRows,
  materialHandlingRows,
  planRows,
  patternRows
}: {
  facilityRows: WorkbookRow[];
  materialHandlingRows: WorkbookRow[];
  planRows: WorkbookRow[];
  patternRows: WorkbookRow[];
}): Location[] {
  const facilityItems = facilityRows.map(parseFacilityLocation).filter((location) => location !== null);

  if (facilityItems.length === 0) {
    return [];
  }

  const origin = {
    x: Math.min(...facilityItems.map((item) => item.absoluteX)),
    y: Math.min(...facilityItems.map((item) => item.absoluteY))
  };
  const activePlanId = selectActivePlanId(planRows, patternRows);
  const activePatternRows = activePlanId
    ? patternRows.filter((row) => normalizeString(row.planid) === activePlanId)
    : patternRows;
  const materialHandlingByCode = new Map(
    materialHandlingRows.map((row) => [normalizeString(row.materialhandlingcode).toLowerCase(), row])
  );
  const unitScale = inferPatternUnitScale(activePatternRows);

  const facilityLocations = facilityItems.map((item) => toLocation(item, origin));
  const patternLocations = activePatternRows
    .map((row) => parsePatternLocation(row, materialHandlingByCode, origin, unitScale))
    .filter((location) => location !== null);

  return [...facilityLocations, ...patternLocations];
}

function parseFacilityLocation(row: WorkbookRow) {
  const type = resolveFacilityType(row.facilitytype);

  if (!type) {
    return null;
  }

  const x0 = numberValue(row.x0 ?? row.locationx);
  const y0 = numberValue(row.y0 ?? row.locationy);
  const z0 = numberValue(row.z0 ?? row.locationz);
  const x1 = row.x1 == null || row.x1 === '' ? x0 + numberValue(row.width) : numberValue(row.x1);
  const y1 = row.y1 == null || row.y1 === '' ? y0 + numberValue(row.depth) : numberValue(row.y1);
  const z1 = row.z1 == null || row.z1 === '' ? z0 + numberValue(row.height) : numberValue(row.z1);
  const code = normalizeString(row.facilitycode);
  const name = normalizeString(row.facilityname) || code || type;

  return {
    id: `facility-${code || name}`,
    name,
    type,
    absoluteX: Math.min(x0, x1),
    absoluteY: Math.min(y0, y1),
    baseZ: Math.min(z0, z1) * MM_TO_M,
    width: Math.max(Math.abs(x1 - x0) * MM_TO_M, MIN_FOOTPRINT),
    depth: Math.max(Math.abs(y1 - y0) * MM_TO_M, MIN_FOOTPRINT),
    height: Math.max(Math.abs(z1 - z0) * MM_TO_M, defaultFacilityHeight(type)),
    description: `${type} from Facility sheet${code ? ` (${code})` : ''}.`
  };
}

function parsePatternLocation(
  row: WorkbookRow,
  materialHandlingByCode: Map<string, WorkbookRow>,
  origin: { x: number; y: number },
  unitScale: number
): Location | null {
  const materialHandlingCode = normalizeString(row.materialhandlingcode);
  const materialHandling = materialHandlingByCode.get(materialHandlingCode.toLowerCase());
  const type = resolvePatternType(materialHandlingCode, materialHandling);
  const [xMin, xMax] = ascendingPair(numberValue(row.x0), numberValue(row.x1));
  const [yMin, yMax] = ascendingPair(numberValue(row.y0), numberValue(row.y1));
  const fallbackWidth = numberValue(materialHandling?.width) * MM_TO_M;
  const fallbackDepth = numberValue(materialHandling?.depth) * MM_TO_M;
  const width = Math.max((xMax - xMin) * unitScale, fallbackWidth, MIN_FOOTPRINT);
  const depth = Math.max((yMax - yMin) * unitScale, fallbackDepth, MIN_FOOTPRINT);
  const code = normalizeString(row.patternresultid);
  const materialName = normalizeString(materialHandling?.materialhandlingname);
  const name = materialName || materialHandlingCode || code || type;
  const height = numberValue(materialHandling?.height) * MM_TO_M || defaultHeight(type);

  if (!code && !materialHandlingCode && width <= MIN_FOOTPRINT && depth <= MIN_FOOTPRINT) {
    return null;
  }

  return {
    id: `pattern-${code || materialHandlingCode}-${xMin}-${yMin}`,
    name,
    type,
    xMin: xMin * unitScale - origin.x * MM_TO_M,
    yMin: yMin * unitScale - origin.y * MM_TO_M,
    xMax: xMin * unitScale - origin.x * MM_TO_M + width,
    yMax: yMin * unitScale - origin.y * MM_TO_M + depth,
    zMin: 0,
    zMax: height,
    description: `${type} from PatternResult${code ? ` (${code})` : ''}.`
  };
}

function toLocation(
  item: NonNullable<ReturnType<typeof parseFacilityLocation>>,
  origin: { x: number; y: number }
): Location {
  const xMin = (item.absoluteX - origin.x) * MM_TO_M;
  const yMin = (item.absoluteY - origin.y) * MM_TO_M;

  return {
    id: item.id,
    name: item.name,
    type: item.type,
    xMin,
    yMin,
    xMax: xMin + item.width,
    yMax: yMin + item.depth,
    zMin: item.baseZ,
    zMax: item.baseZ + item.height,
    description: item.description
  };
}

function selectActivePlanId(planRows: WorkbookRow[], patternRows: WorkbookRow[]) {
  const planId = normalizeString(planRows[0]?.planid);

  if (planId) {
    return planId;
  }

  return normalizeString(patternRows[0]?.planid);
}

function inferPatternUnitScale(patternRows: WorkbookRow[]) {
  return patternRows.some((row) => 'materialhandlingcode' in row) ? MM_TO_M : 1;
}

function resolveFacilityType(value: unknown): LocationType | null {
  const normalized = normalizeString(value).toLowerCase().replace(/[_\s]+/g, ' ');
  const exact = facilityTypeLabels[normalized];

  if (exact) {
    return exact;
  }

  const prefix = Object.entries(facilityTypeLabels).find(([key]) => normalized.startsWith(key));
  return prefix?.[1] ?? null;
}

function resolvePatternType(materialHandlingCode: string, materialHandling?: WorkbookRow): LocationType {
  const storedUnitType = normalizeString(materialHandling?.storedunittype).toLowerCase();
  const materialName = normalizeString(materialHandling?.materialhandlingname).toLowerCase();
  const combined = `${materialHandlingCode} ${materialName}`.toLowerCase();

  if (combined.includes('operation_area')) {
    return 'Operation Area';
  }
  if (storedUnitType.includes('pallet') || combined.includes('nestainer') || combined.includes('rack')) {
    return 'Nestainer';
  }

  return 'Shelf';
}

function defaultHeight(type: LocationType) {
  if (type === 'Nestainer') {
    return 1.35;
  }
  if (type === 'Operation Area') {
    return 0.05;
  }

  return 1.8;
}

function defaultFacilityHeight(type: LocationType) {
  if (type === 'Pillar') {
    return 4;
  }
  if (type === 'Gate') {
    return 3.5;
  }
  if (type === 'Wall') {
    return 2.8;
  }
  if (type === 'Boundary') {
    return 0.12;
  }

  return 0.03;
}

function ascendingPair(left: number, right: number): [number, number] {
  return left <= right ? [left, right] : [right, left];
}

function normalizeString(value: unknown) {
  return value == null ? '' : String(value).trim();
}

function numberValue(value: unknown) {
  const parsed = Number.parseFloat(String(value ?? ''));
  return Number.isFinite(parsed) ? parsed : 0;
}
