import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./app/App.tsx";
import { CatalogueProvider } from "./catalogue/CatalogueContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CatalogueProvider>
      <App />
    </CatalogueProvider>
  </StrictMode>,
);
