import React from "react";
import "./index.css";
import styled from "styled-components";
const BarraSuperior = () => {
  return (
    <header>
      <div>
        <nav className="navegacion">
          <div className="btmNav">
            <a href=""></a>
          </div>
          <div className="docs">
            <BtmLateral href="">Docs</BtmLateral>
          </div>
          <div>
            <BtmLateral href="">About</BtmLateral>
          </div>
          <div>
            <BtmLateral href="">SUPPORT US</BtmLateral>
          </div>
        </nav>
      </div>
    </header>
  );
};

const Encabezado = () => {
  return (
    <div className="encabezado">
      <h1 className="rickApi">The Rick And Morty API</h1>
      {/* <>{<img src="./imagenes/imagenFondo.jpg" alt=""></img>}</> */}
    </div>
  );
};
const BtmLateral = styled.a`
  text-decoration: none;
  trncitions: all;
  &:hover {
    color: #e67e22;
  }
  border: 1px solid #e67e22;
  border-radius: 5px;
  padding: 5px 15px;
  font-size: 15px;
  font-weight: bold;
  margin: 14px;
  color: #34495e;
`;

export default Encabezado;
export { BarraSuperior };
