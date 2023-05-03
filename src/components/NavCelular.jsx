import React from "react";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DensityMediumIcon from "@mui/icons-material/DensityMedium";
//Estilos
import "../estilos/navCelular.css";

const NavCelular = () => {
  return (
    <>
      <div className="navcelular-contenedor">
        <button className="bot-1">
          <DensityMediumIcon
            sx={{ fontSize: 12 }}
            style={{ color: "#4a4a4a" }}
          />
        </button>
        <input
          className="buscador"
          placeholder="¿ Qué es lo que amas ?"
          type="text"
        />
        <button className="bot-2">
          <MoreVertIcon sx={{ fontSize: 18 }} style={{ color: "#727272" }} />
        </button>
      </div>
    </>
  );
};

export default NavCelular;
