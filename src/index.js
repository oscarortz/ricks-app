import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import Encabezado from "./App";
import { BarraSuperior } from "./App";

import PersonajesList from "./componente/PersonajesList";
import Personaje from "./componente/Personaje";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BarraSuperior />
    <Encabezado />
    <PersonajesList className="cotenedor" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
