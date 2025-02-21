import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.js";
import { BrowserRouter  } from "react-router-dom";
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
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AppProvider>
  </React.StrictMode>
);
