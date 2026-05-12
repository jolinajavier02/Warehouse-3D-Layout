import type { Location } from '../types/location';

export async function fetchLocations(): Promise<Location[]> {
  const res = await fetch('/api/locations');

  if (!res.ok) {
    throw new Error(`Failed to load locations: ${res.status}`);
  }

  return res.json() as Promise<Location[]>;
}
