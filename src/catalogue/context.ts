import { createContext } from "react";

import type { BodyZoneId } from "./types";

export type CatalogueContextValue = {
  selectedZoneId: BodyZoneId;
  selectedImplantId: string;
  selectZone: (zoneId: BodyZoneId) => void;
  selectImplant: (implantId: string) => void;
};

export const CatalogueContext = createContext<CatalogueContextValue | null>(null);
