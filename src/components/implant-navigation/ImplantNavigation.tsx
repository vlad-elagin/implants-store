import { useCatalogue, useSelectedZone } from "@/catalogue/selectors";

export function ImplantNavigation() {
  const { selectedImplantId, selectImplant } = useCatalogue();
  const selectedZone = useSelectedZone();

  if (!selectedZone) return null;

  return (
    <nav className="implant-navigation" aria-label={`${selectedZone.name} implants`}>
      <h2 className="implant-navigation__title">{selectedZone.name} implants</h2>
      <ul className="implant-navigation__list">
        {selectedZone.implants.map((implant) => (
          <li className="implant-navigation__item" key={implant.id}>
            <button
              className="implant-navigation__button"
              type="button"
              data-implant-id={implant.id}
              aria-current={implant.id === selectedImplantId ? "true" : undefined}
              onClick={() => selectImplant(implant.id)}
            >
              {implant.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
