import React, { useState, useEffect } from "react";
import axios from "axios";
import "../index.css";
import Personaje from "./Personaje";
function PersonajesList() {
  const [personajes, setPersonajes] = useState([]);

  useEffect(() => {
    /* axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        console.log(res);
        setPersonajes(res.data.results);
        console.log(personajes);
      })
      .catch((err) => {
        console.log(err);
      }); */
    async function fetchData() {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const data = await response.json();
      setPersonajes(data.results);
    }
    fetchData();
  }, []);

  return (
    <div className="contenedor">
      {personajes.map((personaje) => {
        return <Personaje personaje={personaje} key={personaje.id} />;
      })}
    </div>
  );
}
export default PersonajesList;

/* const Personajes = (props) => {
  const [personajes, setPersonajes] = useState([]);

  const obtenerDatos = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const data = await response.json();
    console.log(response);
    setPersonajes(data.results);
    console.log(personajes);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);

  return (
    <div>
      <ul>{}</ul>
    </div>
  );
};
 */
