export type BodyZoneId = "head" | "arms" | "legs" | "nervous";

export type ImplantFeature = {
  id: string;
  name: string;
  description: string;
};

export type Implant = {
  id: string;
  name: string;
  description: string;
  features: ImplantFeature[];
};

export type BodyZone = {
  id: BodyZoneId;
  name: string;
  implants: Implant[];
};
