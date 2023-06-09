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
          <RiCloseCircleFill
            className="close"
            size={20}
            color="#ffffff"
            onClick={handleCloseClick}
          />
        </div>
        <form className="form-publicacion">
          <p className="create-post">Crear nueva publicación</p>
          <div className="new-post-input">
            <label className="create-label">Imagen URL</label>
            <input type="text" className="create-input"/>
          </div>
          <div className="new-post-input">
            <label className="create-label">Nombre</label>
            <input type="text" className="create-input"/>
          </div>
          <div className="new-post-input">
            <label className="create-label">Descripción</label>
            <input type="text" className="create-input"/>
          </div>
          <button className="create-btn">Crear publicacion</button>
        </form>
      </div>
    </>
  );
};

export default NuevaPublicacion;
