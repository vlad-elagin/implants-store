import { Heading } from "../../../../components/heading/Heading";

export function LandingSceneMenu() {
  return (
    <div className="landing-scene__menu">
      <header className="landing-scene__header">
        <Heading>
          Null <span className="heading__highlight">// Flesh</span>
        </Heading>
        <p className="landing-scene__tagline">Aftermarket human augmentation</p>
      </header>

      <div className="landing-scene__introduction">
        <h2 className="landing-scene__title">Biology was only the first draft.</h2>
        <p className="landing-scene__description">
          Aftermarket implants engineered to replace weakness with purpose-built performance.
        </p>
      </div>

      <nav className="landing-scene__navigation" aria-label="Landing navigation">
        <button className="landing-scene__catalogue-link" type="button">
          Explore implants
        </button>
      </nav>
    </div>
  );
}
