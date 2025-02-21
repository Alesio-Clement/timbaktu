import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { HashRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";
import "./theme/darkMode.css";
import "./theme/colors.css";
import "./theme/glass.css";

import { AppProvider } from "./context/context.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppProvider>
      <HashRouter>
        <App />
      </HashRouter>
    </AppProvider>
  </React.StrictMode>
);
