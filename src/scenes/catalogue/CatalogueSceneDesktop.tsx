import { ImplantNavigation } from "@/components/implant-navigation/ImplantNavigation";
import { SelectedImplant } from "@/components/selected-implant/SelectedImplant";
import { ZoneNavigation } from "@/components/zone-navigation/ZoneNavigation";

export function CatalogueSceneDesktop() {
  return (
    <section className="catalogue-scene catalogue-scene--desktop" data-scene="catalogue">
      <h2 className="catalogue-scene__title">Implant Catalogue</h2>
      <ZoneNavigation />
      <ImplantNavigation />
      <SelectedImplant />
    </section>
  );
}
