import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import heart from "../assets/heart.png";
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
  const [user, setUser] = useState({});

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
              <li className="nav-li-icons">
                <img
                  onClick={handleLogout}
                  className="img-perfil"
                  src={
                    user.imagen
                      ? user.imagen
                      : "https://i.pinimg.com/236x/d1/6d/cc/d16dcc87643c7a4abffcaeb50fb389bd.jpg"
                  }
                  alt="."
                />
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
            <IoMdArrowDropdown size={21} style={{ color: "#4a4a4a" }} />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
