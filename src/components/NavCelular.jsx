import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Modal from "@mui/material/Modal";
//Icons
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import WebIcon from "@mui/icons-material/Web";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
//Estilos
import "../estilos/navCelular.css";

const NavCelular = () => {
  const [user, setUser] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  return (
    <>
      <div className="navcelular-contenedor">
        <button className="bot-1" onClick={handleOpen}>
          <DensityMediumIcon
            sx={{ fontSize: 12 }}
            style={{ color: "#4a4a4a" }}
          />
        </button>
        <Modal open={open} onClose={handleClose}>
          <div className="modal-contenedor">
            <div className="first-modal">
              <img
                className="img-modal"
                src={
                  user.portada
                    ? user.portada
                    : "https://p4.wallpaperbetter.com/wallpaper/539/443/704/pink-yellow-gradient-hd-wallpaper-preview.jpg"
                }
                alt=""
              />
              <button className="btn-close" onClick={handleClose}>
                <CloseIcon sx={{ fontSize: 20 }} style={{ color: "#ffffff" }} />
              </button>
              {user.username ? (
                <>
                <Link to="/mi_lienzo">
                  <div className="modal-profile">
                    <img
                      className="modal-img-perfil"
                      src={
                        user.imagen
                          ? user.imagen
                          : "https://i.pinimg.com/236x/d1/6d/cc/d16dcc87643c7a4abffcaeb50fb389bd.jpg"
                      }
                      alt="."
                    />
                    <p className="modal-username"> {user.username} </p>
                    <p className="modal-fullname">
                      {user.name} {user.lastname}{" "}
                    </p>
                  </div>
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <button className="btn-sesion">Iniciar Sesión</button>
                  </Link>
                </>
              )}
            </div>
            <ul className="ul-side">
              <li className="li-p">
                <HomeOutlinedIcon
                  sx={{ fontSize: 18 }}
                  style={{ color: "#4a4a4a" }}
                />
                <p className="li-x">Inicio</p>
              </li>
              <Link to="/">
              <li className="li-p">
                <GridViewOutlinedIcon
                  sx={{ fontSize: 16 }}
                  style={{ color: "#4a4a4a" }}
                />
                <p className="li-x">Descubre</p>
              </li>
              </Link>
              <li className="li-p">
                <WebIcon sx={{ fontSize: 17 }} style={{ color: "#4a4a4a" }} />
                <p className="li-x">Colecciones</p>
              </li>
              <li className="li-p">
                <PeopleAltOutlinedIcon
                  sx={{ fontSize: 18 }}
                  style={{ color: "#4a4a4a" }}
                />
                <p className="li-x">Gente</p>
              </li>
              <li className="li-p">
                <AddOutlinedIcon
                  sx={{ fontSize: 19 }}
                  style={{ color: "#4a4a4a" }}
                />
                <p className="li-x">Agrega Imágenes</p>
              </li>
              <li className="li-p">
                <NotificationsNoneOutlinedIcon
                  sx={{ fontSize: 19 }}
                  style={{ color: "#4a4a4a" }}
                />
                <p className="li-x">Notificaciones</p>
              </li>
              <li className="li-p">
                <EmailOutlinedIcon
                  sx={{ fontSize: 18 }}
                  style={{ color: "#4a4a4a" }}
                />
                <p className="li-x">Mensajes</p>
              </li>
            </ul>
            <ul className="ul-side-dos">
              <li className="li-dos-color">¡Suscríbete ahora!</li>
              <li className="li-dos">Encontrar a mis amigos</li>
              <li className="li-dos">Invitar amigos</li>
              <li className="li-dos">Configuraciones</li>
            </ul>
          </div>
        </Modal>
        <input
          className="buscador"
          placeholder="¿ Qué es lo que amas ?"
          type="text"
        />
        <button className="bot-2" onClick={handleClick}>
          <MoreVertIcon sx={{ fontSize: 18 }} style={{ color: "#727272" }} />
        </button>
        <ul className={click ? "sub-menu" : "none"}>
          {user.username ? (
            <>
              <Link to="/login">
                <li className="sub-li">Cerrar Sesión</li>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login">
                <li className="sub-li">Iniciar Sesión</li>
              </Link>
            </>
          )}
          <li className="sub-li-x">Opinión</li>
        </ul>
      </div>
    </>
  );
};

export default NavCelular;
