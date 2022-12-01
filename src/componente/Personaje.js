import React from "react";
import styled from "styled-components";

function Personaje({ personaje }) {
  return (
    <div className="tarjeta">
      <img src={personaje.image} alt={personaje.name} />
      <div>
        <div className="datos">
          <div className="contenido">
            <Titulo>{personaje.name}</Titulo>
            <ul>
              <li>{personaje.status}</li>
            </ul>
            <p>Last know location:</p>
            <Titulo>{personaje.location.name}</Titulo>
          </div>
        </div>
      </div>
    </div>
  );
}
const Titulo = styled.h1`
  font-size: 30px;
  font-weight: bold;
  color: blue;
  transition: all;
  &:hover {
    color: yellow;
  }
`;

const Status = styled.h3``;
export default Personaje;
