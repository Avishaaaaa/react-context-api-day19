import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

import { StudentProvider } from "./context/StudentContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <StudentProvider>
      <App />
    </StudentProvider>
  </StrictMode>
);