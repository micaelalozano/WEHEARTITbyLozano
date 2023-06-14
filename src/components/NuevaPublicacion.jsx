import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { RiCloseCircleFill } from "react-icons/ri";
import { IoMdClose} from "react-icons/io";
//Estilos
import "../estilos/nuevaPublicacion.css";

const NuevaPublicacion = ({ cerrarModal }) => {
  const handleCloseClick = () => {
    cerrarModal();
  };
  const [user, setUser] = useState({});
  const [imagen, setImagen] = useState("");
  const [name, setName] = useState("");
  const [descripcion, setDescripcion] = useState("");

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  const userId = user.id;

  console.log("user,", userId);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        `/api/publicaciones/${userId}`,
        { imagen, name, descripcion, userId: userId },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then(() => {
        toast("💗  Publicación subida con éxito!", {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          closeButton: <IoMdClose size={15} color="#ffffff" />,
          style: {
            backgroundColor: "#2e2e2e",
            color: "#ffffff",
            fontSize: "16px",
          },
        });
        cerrarModal();
      })
      .catch((err) => {
        window.alert("Error al crear publicacion");
      });
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
        <form className="form-publicacion" onSubmit={handleSubmit}>
          <p className="create-post">Crear nueva publicación</p>
          <div className="new-post-input">
            <label className="create-label">Imagen URL</label>
            <input
              type="text"
              className="create-input"
              onChange={(e) => setImagen(e.target.value)}
              value={imagen}
            />
          </div>
          <div className="new-post-input">
            <label className="create-label">Nombre</label>
            <input
              type="text"
              className="create-input"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>
          <div className="new-post-input">
            <label className="create-label">Descripción</label>
            <input
              type="text"
              className="create-input"
              onChange={(e) => setDescripcion(e.target.value)}
              value={descripcion}
            />
          </div>
          <button className="create-btn">Crear publicacion</button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default NuevaPublicacion;
