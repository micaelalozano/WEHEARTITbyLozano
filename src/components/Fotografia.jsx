import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 
import axios from "axios";
//Estilos
import "../estilos/fotografia.css";

const Fotografia = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [imagen, setImagen] = useState("");

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/api/users/${user.id}`, { imagen }, { withCredentials: true })
      .then((res) => res.data)
      .then((data) => {
        navigate("/mi_lienzo");
      })
      .catch((err) => {
        window.alert("ERROR");
      });
  };

  return (
    <>
      <form action="post" className="cuenta-form" onSubmit={handleSubmit}>
        <div className="div-fotografia">
          <p className="p-fotografia">Imagen actual</p>
          <img
            className="img-fotografia"
            src={
              user.imagen
                ? user.imagen
                : "https://i.pinimg.com/236x/d1/6d/cc/d16dcc87643c7a4abffcaeb50fb389bd.jpg"
            }
            alt=""
          />
        </div>
        <div className="div-fotografia-dos">
          <p className="p-fotografia">Nueva imagen</p>
          <input
            type="text"
            className="input-fotografia"
            onChange={(e) => setImagen(e.target.value)}
            value={imagen}
          />
        </div>
        <button className="cuenta-btn">Guardar cambios</button>
      </form>
    </>
  );
};

export default Fotografia;
