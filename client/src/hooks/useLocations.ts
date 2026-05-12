import { useEffect, useState } from 'react';
import { fetchLocations } from '../services/api';
import { fetchWorkbookLocations } from '../services/workbookLocations';
import type { Location } from '../types/location';

interface UseLocationsResult {
  locations: Location[];
  loading: boolean;
  error: string | null;
}

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
          nextLocations = await fetchWorkbookLocations();
        } catch {
          nextLocations = await fetchLocations();
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
