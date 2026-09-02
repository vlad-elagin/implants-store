import { useContext } from "react";

import { catalog } from "./catalogue";
import { CatalogueContext } from "./context";

export function useCatalogue() {
  const context = useContext(CatalogueContext);
  if (!context) throw new Error("useCatalogue must be used inside CatalogueProvider");
  return context;
}

export function useSelectedZone() {
  const { selectedZoneId } = useCatalogue();
  return catalog.find((zone) => zone.id === selectedZoneId);
}

export function useSelectedImplant() {
  const { selectedImplantId } = useCatalogue();
  const zone = useSelectedZone();
  return zone?.implants.find((implant) => implant.id === selectedImplantId);
}
