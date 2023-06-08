import React from "react";
import { RiCloseCircleFill } from "react-icons/ri";
//Estilos
import "../estilos/nuevaPublicacion.css";

const NuevaPublicacion = ({ cerrarModal }) => {
  const handleCloseClick = () => {
    cerrarModal();
  };

  return (
    <>
      <div className="modal-publicacion">
        <div className="div-close">
          <RiCloseCircleFill className="close" size={20} color="#ffffff" onClick={handleCloseClick} />
        </div>
        <form className="form-publicacion">
            <p>Crear nueva publicación</p>
        </form>
      </div>
    </>
  );
};

export default NuevaPublicacion;
