import "./LandingSceneDesktop.css";

import landingHero from "../../../assets/images/landing/landing-hero.webp";
import { AppImage } from "../../../components/image/app-image/AppImage";
import { LandingSceneMenu } from "./menu/LandingSceneMenu";

export function LandingSceneDesktop() {
  return (
    <section className="landing-scene landing-scene--desktop" data-scene="landing">
      <AppImage
        className="landing-scene__hero"
        src={landingHero}
        alt="Cybernetic implant catalogue hero"
        loading="eager"
      />

      <LandingSceneMenu />
    </section>
  );
}
