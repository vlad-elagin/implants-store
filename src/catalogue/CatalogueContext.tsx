import { useCallback, useMemo, useState, type PropsWithChildren } from "react";

import { catalog } from "./catalogue";
import type { BodyZoneId } from "./types";
import { CatalogueContext } from "./context";

const initialZone = catalog[0];
const initialImplant = initialZone.implants[0];

export function CatalogueProvider({ children }: PropsWithChildren) {
  const [selectedZoneId, setSelectedZoneId] = useState<BodyZoneId>(initialZone.id);
  const [selectedImplantId, setSelectedImplantId] = useState(initialImplant.id);

  const selectZone = useCallback((zoneId: BodyZoneId) => {
    const zone = catalog.find((item) => item.id === zoneId);
    if (!zone) return;

    setSelectedZoneId(zone.id);
    setSelectedImplantId(zone.implants[0].id);
  }, []);

  const selectImplant = useCallback(
    (implantId: string) => {
      const zone = catalog.find((item) => item.id === selectedZoneId);
      if (zone?.implants.some((implant) => implant.id === implantId)) {
        setSelectedImplantId(implantId);
      }
    },
    [selectedZoneId],
  );

  const value = useMemo(
    () => ({ selectedZoneId, selectedImplantId, selectZone, selectImplant }),
    [selectedZoneId, selectedImplantId, selectZone, selectImplant],
  );

  return <CatalogueContext.Provider value={value}>{children}</CatalogueContext.Provider>;
}
