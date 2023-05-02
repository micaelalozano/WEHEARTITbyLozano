import React from "react";
import MasReciente from "../components/MasReciente";
import Navbar from "../components/Navbar";
//Estilos
import "../estilos/inicio.css";

const Inicio = () => {
  return (
    <>
      <Navbar />
      <p className="recent">Lo más reciente</p>
      <MasReciente />
    </>
  );
};

export default Inicio;
