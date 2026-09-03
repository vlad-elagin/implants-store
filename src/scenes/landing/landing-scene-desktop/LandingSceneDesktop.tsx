import "./LandingSceneDesktop.css";

import landingHero from "../../../assets/images/landing/landing-hero.webp";
import { AppImage } from "../../../components/image/app-image/AppImage";

export function LandingSceneDesktop() {
  return (
    <section className="landing-scene landing-scene--desktop" data-scene="landing">
      <AppImage
        className="landing-scene__hero"
        src={landingHero}
        alt="Cybernetic implant catalogue hero"
        loading="eager"
      />

      <div className="landing-scene__menu">
        <header className="landing-scene__header">
          <h1 className="landing-scene__brand">
            Null <span className="landing-scene__brand-highlight">// Flesh</span>
          </h1>
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
    </section>
  );
}
