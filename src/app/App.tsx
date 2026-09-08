import "./App.css";
import { useMediaQuery } from "usehooks-ts";
import { LandingSceneDesktop } from "@/scenes/landing/landing-scene-desktop/LandingSceneDesktop";
import { LandingSceneMobile } from "@/scenes/landing/LandingSceneMobile";

function App() {
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <main className="app">
      <div className="stage">{isMobile ? <LandingSceneMobile /> : <LandingSceneDesktop />}</div>
    </main>
  );
}

export default App;
