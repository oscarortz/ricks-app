import React from "react";
import styled from "styled-components";

function Personaje({ personaje, status }) {
  return (
    <div className="tarjeta">
      <img src={personaje.image} alt={personaje.name} />
      <div>
        <div className="datos">
          <div className="contenido">
            <div className="titulos">
              <Titulo>{personaje.name}</Titulo>
              <div className="estatus">
                <div
                  className={
                    personaje.status === "Alive"
                      ? "green"
                      : personaje.status === "Dead"
                      ? "red"
                      : personaje.status === "unknown"
                      ? "black"
                      : ""
                  }
                ></div>

                <div className="contenedor-estatus">
                  {personaje.status} - {personaje.species}
                </div>
              </div>
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

const Bgcolor = (personaje) => {
  if (personaje.status === "Alive") {
    styled.div`
      background-color: green;
      border: 1px solid black;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      display: flex;
    `;
  }
  if (personaje.status === "Dead") {
    styled.div`
      background-color: red;
      border: 1px solid black;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      display: flex;
    `;
  } else {
    styled.div`
      background-color: black;
      border: 1px solid black;
      width: 7px;
      height: 7px;
      border-radius: 50%;
      display: flex;
    `;
  }
};
const Status = styled.div`
  background-color: ${Bgcolor};
  border: 1px solid black;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  display: flex;
`;

export default Personaje;
