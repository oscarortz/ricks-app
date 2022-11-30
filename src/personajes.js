import React, { useState, useEffect } from "react";
import axios from "axios";

/* const Personajes = function ObtenerDatos() {
  const [personajes, setPersonajes] = useState([]);
 */
/*  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res) => {
        console.log(res);
        setPersonajes([res.data]);
        console.log(personajes);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      {console.log(personajes.data)}
      <div>
        <ul>
          {personajes.map((personajes) => (
            <li key={personajes}>{personajes}</li>
          ))}
        </ul>
      </div>
    </>
  );
}; */

const Personajes = () => {
  const [personajes, setPersonajes] = useState([]);
  useEffect(() => {
    obtenerDatos();
  }, []);
  const obtenerDatos = async () => {
    const data = await fetch("https://rickandmortyapi.com/api/character");
    const personajes = await data.json();
    setPersonajes(personajes);
    console.log(personajes);
  };

  return (
    <div>
      <ol>
        {personajes[0].results.map((item) => (
          <li>{item.results}</li>
        ))}
      </ol>
    </div>
  );
};
export default Personajes;
