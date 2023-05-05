import React, { useState, useEffect } from "react";
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
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

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
                src="https://p4.wallpaperbetter.com/wallpaper/539/443/704/pink-yellow-gradient-hd-wallpaper-preview.jpg"
                alt="Pic"
              />
              <button className="btn-close" onClick={handleClose}>
                <CloseIcon sx={{ fontSize: 20 }} style={{ color: "#ffffff" }} />
              </button>
              <button className="btn-sesion">Iniciar Sesión</button>
            </div>
            <ul className="ul-side">
              <li className="li-p">
                <HomeOutlinedIcon
                  sx={{ fontSize: 18 }}
                  style={{ color: "#4a4a4a" }}
                />
                <p className="li-x">Inicio</p>
              </li>
              <li className="li-p">
                <GridViewOutlinedIcon
                  sx={{ fontSize: 16 }}
                  style={{ color: "#4a4a4a" }}
                />
                <p className="li-x">Descubre</p>
              </li>
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
          <li className="sub-li">Iniciar Sesión</li>
          <li className="sub-li-x">Opinión</li>
        </ul>
      </div>
    </>
  );
};

export default NavCelular;
