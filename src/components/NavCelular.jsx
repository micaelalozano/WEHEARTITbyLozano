import React, { useState, useEffect } from "react";
import Modal from "@mui/material/Modal";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
import CloseIcon from "@mui/icons-material/Close";
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
                <CloseIcon
                  sx={{ fontSize: 20 }}
                  style={{ color: "#ffffff" }}
                />
              </button>
              <button className="btn-sesion">Iniciar Sesión</button>
            </div>
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
