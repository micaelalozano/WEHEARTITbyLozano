import React from "react";
import MasReciente from "../components/MasReciente";
import Navbar from "../components/Navbar";
import NavCelular from "../components/NavCelular";
//Estilos
import "../estilos/inicio.css";

const Inicio = () => {
  return (
    <>
      <Navbar />
      <NavCelular/>
      <p className="recent">Lo más reciente</p>
      <MasReciente />
      <div className="orden">
        <p className="o-1">Imágenes populares</p>
        <li className="o-2">Justo ahora</li>
        <li className="o-2">Ayer</li>
        <li className="o-2">La semana pasada</li>
        <li className="o-2">El mes pasado</li>
        <li className="o-2">El año pasado</li>
        <li className="o-2">Escoge fecha</li>
      </div>
    </>
  );
};

export default Inicio;
