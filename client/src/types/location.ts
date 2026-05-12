export type LocationType =
  | 'Boundary'
  | 'Layout Zone'
  | 'Main Aisle'
  | 'Work Area'
  | 'Pillar'
  | 'Gate'
  | 'Wall'
  | 'Non-placeable Area'
  | 'Shelf'
  | 'Nestainer'
  | 'Operation Area'
  | 'Shop'
  | 'Path'
  | 'Dock'
  | 'Rack'
  | 'Office';

export interface Location {
  id: string;
  name: string;
  type: LocationType;
  xMin: number;
  yMin: number;
  xMax: number;
  yMax: number;
  zMin: number;
  zMax: number;
  description?: string;
}
