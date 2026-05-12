import { useMemo, useState } from 'react';
import type { Location } from '../types/location';

export function useMapSelection(locations: Location[]) {
  const [selectedLocationId, setSelectedLocationId] = useState<string | null>(null);
  const [hoveredLocationId, setHoveredLocationId] = useState<string | null>(null);

  const selectedLocation = useMemo(
    () => locations.find((location) => location.id === selectedLocationId) ?? null,
    [locations, selectedLocationId]
  );

  return {
    selectedLocation,
    selectedLocationId,
    hoveredLocationId,
    setSelectedLocationId,
    setHoveredLocationId
  };
}
