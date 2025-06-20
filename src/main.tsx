import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./components/App";

const element = document.getElementById("root");

if (element) {
  createRoot(element).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
