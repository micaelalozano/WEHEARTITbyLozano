import React from "react";
//Estilos
import "../estilos/cuenta.css";

const Cuenta = () => {
  return (
    <>
      <form action="post" className="cuenta-form">
        <div className="cuenta-div">
          <label className="cuenta-label">Nombre de usuario</label> <input type="text" className="cuenta-input" />
        </div>
        <div className="cuenta-div">
          <label className="cuenta-label">Correo electrónico</label> <input type="text" className="cuenta-input"/>
        </div>
        <div className="cuenta-div">
          <label className="cuenta-label">Biografía</label> <input type="text" className="cuenta-input"/>
        </div>
        <div className="cuenta-div">
          <label className="cuenta-label">Ubicación</label> <input type="text" className="cuenta-input"/>
        </div>
        <button className="cuenta-btn">Guardar cambios</button>
      </form>
    </>
  );
};

export default Cuenta;
