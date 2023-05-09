import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import heart from "../assets/heart.png";
import { useNavigate } from "react-router";
//Iconos
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import LocalFloristOutlinedIcon from "@mui/icons-material/LocalFloristOutlined";
import Crop75Icon from "@mui/icons-material/Crop75";
import HeadphonesIcon from "@mui/icons-material/Headphones";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import { RiChat3Line } from "react-icons/ri";
import { BiBell } from "react-icons/bi";
import { RiLoginCircleLine } from "react-icons/ri";
import { IoMdArrowDropdown } from "react-icons/io";
//Estilos
import "../estilos/navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [click, setClick] = useState(false);
  const [secondClick, setSecondClick] = useState(false);

  const handleClick = () => setClick(!click);
  const handleSecondClick = () => setSecondClick(!secondClick);

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  const handleLogout = () => {
    axios
      .post("/api/users/logout")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
        navigate("/");
      });
  };

  return (
    <>
      <div className="nav-contenedor">
        <ul className="nav-inicio">
          <img className="nav-logo" src={heart} alt="Logo" />

          <li className="nav-li">
            <HomeOutlinedIcon
              sx={{ fontSize: 25 }}
              style={{ color: "#4a4a4a" }}
            />
            <p className="nav-p">Inicio</p>
          </li>
          <li className="nav-li">
            <GridViewOutlinedIcon
              sx={{ fontSize: 21 }}
              style={{ color: "#4a4a4a" }}
            />
            <p className="nav-p">Descubre</p>
          </li>
          <li className="nav-li">
            <LocalFloristOutlinedIcon
              sx={{ fontSize: 21 }}
              style={{ color: "#4a4a4a" }}
            />
            <p className="nav-p">Artículos</p>
          </li>
          <li className="nav-li">
            <Crop75Icon sx={{ fontSize: 23 }} style={{ color: "#4a4a4a" }} />
            <p className="nav-p">Canales</p>
          </li>
          <li className="nav-li">
            <HeadphonesIcon
              sx={{ fontSize: 20 }}
              style={{ color: "#4a4a4a" }}
            />
            <p className="nav-p">Podcasts</p>
          </li>

          <div className="nav-buscador">
            <button className="nav-search-btn">
              <SearchOutlinedIcon
                sx={{ fontSize: 17 }}
                style={{ color: "#4a4a4a" }}
              />
            </button>
            <form>
              <input
                className="nav-input"
                type="text"
                placeholder="Busca las cosas que amas..."
              />
            </form>
          </div>
        </ul>

        <ul className="nav-icons">
          <div className="nav-add">
            <AddOutlinedIcon
              sx={{ fontSize: 18 }}
              style={{ color: "#ff4477" }}
            />
            <p className="nav-publicacion">Nueva publicación</p>
          </div>
          <li className="nav-li-icons">
            <span className="tooltip" mensaje="Mensajes">
              <RiChat3Line size={20} style={{ color: "#4a4a4a" }} />
            </span>
          </li>
          <li className="nav-li-icons">
            <span className="tooltip" mensaje="Notificaciones">
              <BiBell size={21} style={{ color: "#4a4a4a" }} />
            </span>
          </li>
          {user.username ? (
            <>
              <li className="nav-li-icons" onClick={handleClick}>
                <img
                  className="img-perfil"
                  src={
                    user.imagen
                      ? user.imagen
                      : "https://i.pinimg.com/236x/d1/6d/cc/d16dcc87643c7a4abffcaeb50fb389bd.jpg"
                  }
                  alt="."
                />
                <ul className={click ? "sub-menu-dos" : "none"}>
                  <li className="sub-li-dos">Mi Lienzo</li>
                  <li className="sub-li-dos">Mis Colecciones</li>
                  <li className="sub-li-dos">Mis Publicaciones</li>
                  <hr className="hr" />
                  <li className="sub-li-dos">Configuraciones</li>
                  <li className="sub-li-dos">Encontrar a mis amigos</li>
                  <li className="sub-li-dos">Lenguaje</li>
                  <hr className="hr" />
                  <button className="btn-cerrar-sesion" onClick={handleLogout}>
                    Cerrar Sesión
                  </button>
                </ul>
              </li>
            </>
          ) : (
            <>
              <li className="nav-li-icons">
                <Link to="/login">
                  <span className="tooltip" mensaje="Iniciar Sesión">
                    <RiLoginCircleLine size={21} style={{ color: "#4a4a4a" }} />
                  </span>
                </Link>
              </li>{" "}
            </>
          )}
          <li className="nav-li-icons">
            <IoMdArrowDropdown
              size={21}
              style={{ color: "#4a4a4a" }}
              onClick={handleSecondClick}
            />
          </li>
          <ul className={secondClick ? "sub-menu-tres" : "none"}>
            <li className="sub-li-dos">Acerca de We Heart It</li>
            <hr className="hr" />
            <button className="btn-descarga" onClick={handleLogout}>
              Descargar la aplicación
            </button>
            <hr className="hr" />
            <li className="sub-li-dos">Condiciones</li>
            <li className="sub-li-dos">Privacidad</li>
            <li className="sub-li-dos">Contactanos</li>
            <li className="sub-li-dos">Ayuda</li>
          </ul>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
