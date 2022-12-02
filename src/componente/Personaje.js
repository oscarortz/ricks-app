import React from "react";
import styled from "styled-components";

function Personaje({ personaje }) {
  return (
    <div className="tarjeta">
      <img src={personaje.image} alt={personaje.name} />
      <div>
        <div className="datos">
          <div className="contenido">
            <div className="titulos">
              <Titulo>{personaje.name}</Titulo>
              <ul></ul>
              <li>
                {personaje.status} - {personaje.species}
              </li>
            </div>
            <p>Last know location:</p>
            <Location>{personaje.location.name}</Location>
          </div>
        </div>
      </div>
    </div>
  );
}
const Titulo = styled.h1`
  font-size: 23px;
  font-weight: bold;
  color: #f0f3f4;
  transition: all;
  &:hover {
    color: #dc7633;
  }
`;
const Location = styled.h4`
  font-size: 20px;
  color: #f0f3f4;
  &:hover {
    color: #dc7633;
  }
`;
const Status = styled.h3``;
export default Personaje;
