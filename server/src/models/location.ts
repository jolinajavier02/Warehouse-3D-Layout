import { pool } from '../db/pool.js';
import type { Location, LocationType } from '../types/location.js';

interface LocationRow {
  id: string;
  name: string;
  type: LocationType;
  x_min: string;
  y_min: string;
  x_max: string;
  y_max: string;
  z_min: string;
  z_max: string;
  description: string | null;
}

const sampleLocations: Location[] = [
  {
    id: 'boundary_1',
    name: 'Main Boundary',
    type: 'Boundary',
    xMin: 0,
    yMin: 0,
    xMax: 40,
    yMax: 40,
    zMin: 0,
    zMax: 0.2,
    description: 'Overall warehouse area'
  },
  {
    id: 'shop_1',
    name: 'Shop 1 (NW)',
    type: 'Shop',
    xMin: 0,
    yMin: 20,
    xMax: 18,
    yMax: 40,
    zMin: 0,
    zMax: 4,
    description: 'North-west unit'
  },
  {
    id: 'shop_2',
    name: 'Shop 2 (NE)',
    type: 'Shop',
    xMin: 22,
    yMin: 20,
    xMax: 40,
    yMax: 40,
    zMin: 0,
    zMax: 4,
    description: 'North-east unit'
  },
  {
    id: 'path_vert',
    name: 'Vertical Corridor',
    type: 'Path',
    xMin: 18,
    yMin: 0,
    xMax: 22,
    yMax: 40,
    zMin: 0,
    zMax: 0.25,
    description: 'Vertical path through center'
  },
  {
    id: 'path_horiz',
    name: 'Horizontal Corridor',
    type: 'Path',
    xMin: 0,
    yMin: 18,
    xMax: 40,
    yMax: 22,
    zMin: 0,
    zMax: 0.25,
    description: 'Horizontal path through center'
  },
  {
    id: 'dock_1',
    name: 'Receiving Dock',
    type: 'Dock',
    xMin: 6,
    yMin: 0,
    xMax: 16,
    yMax: 8,
    zMin: 0,
    zMax: 2.2,
    description: 'Inbound receiving area'
  },
  {
    id: 'rack_1',
    name: 'Rack A',
    type: 'Rack',
    xMin: 24,
    yMin: 4,
    xMax: 30,
    yMax: 16,
    zMin: 0,
    zMax: 5,
    description: 'Primary storage rack'
  },
  {
    id: 'office_1',
    name: 'Operations Office',
    type: 'Office',
    xMin: 31,
    yMin: 5,
    xMax: 38,
    yMax: 14,
    zMin: 0,
    zMax: 3.5,
    description: 'Warehouse supervision office'
  }
];

function mapRow(row: LocationRow): Location {
  return {
    id: row.id,
    name: row.name,
    type: row.type,
    xMin: Number(row.x_min),
    yMin: Number(row.y_min),
    xMax: Number(row.x_max),
    yMax: Number(row.y_max),
    zMin: Number(row.z_min),
    zMax: Number(row.z_max),
    description: row.description ?? undefined
  };
}

export async function getAllLocations(): Promise<Location[]> {
  if (!process.env.DATABASE_URL && !process.env.PGDATABASE) {
    return sampleLocations;
  }

  const result = await pool.query<LocationRow>(
    `select id, name, type, x_min, y_min, x_max, y_max, z_min, z_max, description
     from locations
     order by id`
  );

  return result.rows.map(mapRow);
}

export async function getLocationById(id: string): Promise<Location | null> {
  if (!process.env.DATABASE_URL && !process.env.PGDATABASE) {
    return sampleLocations.find((location) => location.id === id) ?? null;
  }

  const result = await pool.query<LocationRow>(
    `select id, name, type, x_min, y_min, x_max, y_max, z_min, z_max, description
     from locations
     where id = $1`,
    [id]
  );

  return result.rows[0] ? mapRow(result.rows[0]) : null;
}
