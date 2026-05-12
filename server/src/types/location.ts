export type LocationType = 'Boundary' | 'Shop' | 'Path' | 'Dock' | 'Rack' | 'Office';

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
