import { useSelectedImplant, useSelectedZone } from "@/catalogue/selectors";

export function SelectedImplant() {
  const selectedZone = useSelectedZone();
  const selectedImplant = useSelectedImplant();

  if (!selectedZone || !selectedImplant) return null;

  return (
    <article className="selected-implant" data-implant-id={selectedImplant.id}>
      <header className="selected-implant__header">
        <p className="selected-implant__zone">{selectedZone.name}</p>
        <h1 className="selected-implant__name">{selectedImplant.name}</h1>
        <p className="selected-implant__description">{selectedImplant.description}</p>
      </header>

      <section className="selected-implant__features" aria-labelledby="features-title">
        <h2 id="features-title" className="selected-implant__features-title">
          Features
        </h2>
        <ul className="selected-implant__feature-list">
          {selectedImplant.features.map((feature) => (
            <li className="selected-implant__feature" key={feature.id}>
              <h3 className="selected-implant__feature-name">{feature.name}</h3>
              <p className="selected-implant__feature-description">{feature.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
