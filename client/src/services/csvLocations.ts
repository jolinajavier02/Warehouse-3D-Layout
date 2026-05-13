import type { Location, LocationType } from '../types/location';

const DEFAULT_CSV_PATH = '/data/location-30-shops.csv?v=final-layout-20260513';

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

export async function fetchCsvLocations(csvPath = DEFAULT_CSV_PATH): Promise<Location[]> {
  const response = await fetch(csvPath, { cache: 'no-store' });

  if (!response.ok) {
    throw new Error(`Failed to load CSV: ${response.status}`);
  }

  return parseLocationsCsv(await response.text());
}

export function parseLocationsCsv(csv: string): Location[] {
  const rows = parseCsvRows(csv).filter((row) => row.some((value) => value.trim() !== ''));

  if (rows.length < 2) {
    return [];
  }

  const headers = rows[0].map(normalizeHeader);

  return rows
    .slice(1)
    .map((row) => rowToRecord(headers, row))
    .map(toLocation)
    .filter((location) => location !== null);
}

function parseCsvRows(csv: string): string[][] {
  const rows: string[][] = [];
  let row: string[] = [];
  let cell = '';
  let insideQuotes = false;

  for (let index = 0; index < csv.length; index += 1) {
    const char = csv[index];
    const nextChar = csv[index + 1];

    if (char === '"' && insideQuotes && nextChar === '"') {
      cell += '"';
      index += 1;
      continue;
    }

    if (char === '"') {
      insideQuotes = !insideQuotes;
      continue;
    }

    if (char === ',' && !insideQuotes) {
      row.push(cell);
      cell = '';
      continue;
    }

    if ((char === '\n' || char === '\r') && !insideQuotes) {
      if (char === '\r' && nextChar === '\n') {
        index += 1;
      }
      row.push(cell);
      rows.push(row);
      row = [];
      cell = '';
      continue;
    }

    cell += char;
  }

  if (cell || row.length > 0) {
    row.push(cell);
    rows.push(row);
  }

  return rows;
}

function rowToRecord(headers: string[], row: string[]) {
  return Object.fromEntries(headers.map((header, index) => [header, row[index] ?? '']));
}

function toLocation(record: Record<string, string>): Location | null {
  const type = toLocationType(valueFor(record, 'type'));
  const id = valueFor(record, 'id').trim();

  if (!id || !type) {
    return null;
  }

  return {
    id,
    type,
    name: valueFor(record, 'name').trim() || id,
    xMin: numberValue(valueFor(record, 'xmin')),
    yMin: numberValue(valueFor(record, 'ymin')),
    xMax: numberValue(valueFor(record, 'xmax')),
    yMax: numberValue(valueFor(record, 'ymax')),
    zMin: numberValue(valueFor(record, 'zmin')),
    zMax: zMaxValue(record, type),
    description: valueFor(record, 'description').trim() || undefined
  };
}

function normalizeHeader(header: string) {
  return header.trim().toLowerCase().replace(/[\s_-]+/g, '');
}

function valueFor(record: Record<string, string>, field: string) {
  return record[field] ?? '';
}

function zMaxValue(record: Record<string, string>, type: LocationType) {
  const value = valueFor(record, 'zmax');

  if (value.trim() !== '') {
    return numberValue(value);
  }

  return numberValue(valueFor(record, 'zmin')) + defaultHeight(type);
}

function toLocationType(value: string): LocationType | null {
  const normalized = value.trim().toLowerCase().replace(/[\s_-]+/g, '');
  const matched = [...validLocationTypes].find((type) => type.toLowerCase().replace(/[\s_-]+/g, '') === normalized);

  return matched ?? null;
}

function numberValue(value: string) {
  const parsed = Number.parseFloat(value);
  return Number.isFinite(parsed) ? parsed : 0;
}

function defaultHeight(type: LocationType) {
  if (type === 'Boundary') {
    return 0.1;
  }
  if (type === 'Layout Zone' || type === 'Path') {
    return 0.08;
  }
  if (type === 'Gate') {
    return 2.2;
  }
  return 3.4;
}
