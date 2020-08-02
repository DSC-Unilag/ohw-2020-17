import React from "react";
import ReactDOM from "react-dom";

import "./assets/css/all.min.css";
import "./assets/css/index.css";
import "./assets/css/nice-select.css";
import { GymProvider, UserProvider } from "./contexts/";

import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <GymProvider>
        <App />
      </GymProvider>
    </UserProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
