import React from "react";
import "./index.css";
const BarraSuperior = () => {
  return (
    <header>
      <nav>
        <a href=""></a>
        <a href="">Docs</a>
        <a href="">About</a>
        <a href="">SUPPORT US</a>
      </nav>
    </header>
  );
};

const Encabezado = () => {
  return (
    <div className="encabezado">
      <h1 className="rickApi">The Rick And Morty API</h1>
    </div>
  );
};

export default Encabezado;
export { BarraSuperior };
