import { useEffect, useState } from 'react';
import { fetchLocations } from '../services/api';
import { fetchCsvLocations } from '../services/csvLocations';
import { fetchWorkbookLocations } from '../services/workbookLocations';
import type { Location } from '../types/location';

interface UseLocationsResult {
  locations: Location[];
  loading: boolean;
  error: string | null;
}

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
    description: 'Gray warehouse boundary'
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
    description: 'White base surface'
  }
];

export function useLocations(): UseLocationsResult {
  const [locations, setLocations] = useState<Location[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let ignore = false;

    async function loadLocations() {
      try {
        setLoading(true);
        setError(null);
        let nextLocations: Location[];

        try {
          nextLocations = await fetchCsvLocations();
        } catch {
          try {
            nextLocations = await fetchWorkbookLocations();
          } catch {
            try {
              nextLocations = await fetchLocations();
            } catch {
              nextLocations = emptyWarehouseLocations;
            }
          }
        }

        if (!ignore) {
          setLocations(nextLocations);
        }
      } catch (err) {
        if (!ignore) {
          setError(err instanceof Error ? err.message : 'Failed to load locations');
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    void loadLocations();

    return () => {
      ignore = true;
    };
  }, []);

  return { locations, loading, error };
}
