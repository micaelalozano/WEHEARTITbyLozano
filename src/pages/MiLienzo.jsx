import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import NavCelular from "../components/NavCelular";
import Modal from "@mui/material/Modal";
import { IoMdCloseCircle } from "react-icons/io";
//Estilos
import "../estilos/miLienzo.css";

const MiLienzo = () => {
  const [user, setUser] = useState({});
  const [portada, setPortada] = useState("");
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [portadaActualizada, setPortadaActualizada] = useState(false);

  useEffect(() => {
    if (portadaActualizada) {
      window.location.reload();
    }
  }, [portadaActualizada]);

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  const id = user.id;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `/api/users/cambiar_portada/${id}`,
        { portada },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then((data) => {
        handleClose();
        setPortadaActualizada(true);
      })
      .catch((err) => {
        window.alert("ERROR");
      });
  };

  console.log("username", user);

  return (
    <>
      <Navbar />
      <NavCelular />
      <div className="lienzo-contenedor">
        <img
          className="lienzo-portada"
          src={
            user.portada
              ? user.portada
              : "https://p4.wallpaperbetter.com/wallpaper/539/443/704/pink-yellow-gradient-hd-wallpaper-preview.jpg"
          }
          alt=""
        />
        <div className="data-contenedor">
          <ul className="ul-contenedor">
            <li className="li-lienzo">0 hearts</li>
            <li className="li-lienzo">0 colecciones</li>
            <li className="li-lienzo">0 publicaciones</li>
            <li className="li-lienzo">Siguiendoa a 0</li>
            <li className="li-lienzo">0 seguidores</li>
          </ul>
          <p onClick={handleClick} className="lienzo-ajustes">Ajustes</p>
          <ul className={click ? "menu-ajustes" : "none"}>
            <li className="ajustes-li" onClick={handleOpen}>
              Editar portada
            </li>
            <Link to="/editar_perfil">
              <li className="ajustes-li-dos">Editar perfil</li>
            </Link>
            <Modal open={open} onClose={handleClose}>
              <div className="modal-portada">
                <form className="modal-contenedor-dos" onSubmit={handleSubmit}>
                  <div className="titulo-contenedor">
                    <h2 className="portada">Cambiar portada</h2>
                    <button className="btn-cerrar" onClick={handleClose}>
                      <IoMdCloseCircle size={21} style={{ color: "#ff4477" }} />
                    </button>
                  </div>
                  <div className="div-contenedor">
                    <p id="modal-texto">Imagen actual</p>
                    <img
                      className="img-portada-modal"
                      src={
                        user.portada
                          ? user.portada
                          : "https://p4.wallpaperbetter.com/wallpaper/539/443/704/pink-yellow-gradient-hd-wallpaper-preview.jpg"
                      }
                      alt=""
                    />
                  </div>
                  <div className="div-contenedor">
                    <p id="modal-texto">Nueva imagen</p>
                    <input
                      type="text"
                      required
                      onChange={(e) => setPortada(e.target.value)}
                      value={portada}
                    />
                  </div>
                  <button className="btn-guardar">Guardar cambios</button>
                </form>
              </div>
            </Modal>
          </ul>
        </div>
        <div className="lienzo-perfil">
          <img
            className="perfil-img"
            src={
              user.imagen
                ? user.imagen
                : "https://i.pinimg.com/236x/d1/6d/cc/d16dcc87643c7a4abffcaeb50fb389bd.jpg"
            }
            alt=""
          />
          <h1 className="h1-username">{user.username}</h1>
        </div>
      </div>
      <p className="lienzo-biografia"> {user.biografia} </p>
      <p className="lienzo-ubicacion"> {user.ubicacion} </p>
    </>
  );
};

export default MiLienzo;
