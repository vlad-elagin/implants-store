import { catalog } from "@/catalogue/catalogue";
import { useCatalogue } from "@/catalogue/selectors";

export function ZoneNavigation() {
  const { selectedZoneId, selectZone } = useCatalogue();

  return (
    <nav className="zone-navigation" aria-label="Body zones">
      <h2 className="zone-navigation__title">Body zones</h2>
      <ul className="zone-navigation__list">
        {catalog.map((zone) => (
          <li className="zone-navigation__item" key={zone.id}>
            <button
              className="zone-navigation__button"
              type="button"
              data-zone-id={zone.id}
              aria-current={zone.id === selectedZoneId ? "true" : undefined}
              onClick={() => selectZone(zone.id)}
            >
              {zone.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
