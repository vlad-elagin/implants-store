import "./App.css";
import { ImplantNavigation } from "../components/implant-navigation/ImplantNavigation";
import { SelectedImplant } from "../components/selected-implant/SelectedImplant";
import { ZoneNavigation } from "../components/zone-navigation/ZoneNavigation";

function App() {
  return (
    <main className="app">
      <h1 className="app__title">Cybernetic Implant Catalogue</h1>
      <ZoneNavigation />
      <ImplantNavigation />
      <SelectedImplant />
    </main>
  );
}

export default App;
