import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Supports weights 100-900
import "@fontsource-variable/inter/wght.css";
// Supports weights 300-700
import "@fontsource-variable/space-grotesk/wght.css";
import "./styles/style.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
