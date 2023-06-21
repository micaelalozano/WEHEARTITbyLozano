import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
//Estilos
import "../estilos/cuenta.css";

const Cuenta = () => {
  const [user, setUser] = useState({});
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [biografia, setBiografia] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  useEffect(() => {
    axios
      .get("/api/users/ruta/perfil")
      .then((res) => res.data)
      .then((user) => {
        setUser(user);
        setUsername(user.username); 
        setEmail(user.email);
        setBiografia(user.biografia);
        setUbicacion(user.ubicacion);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(
        `/api/users/configuraciones/${user.id}`,
        { username, email, biografia, ubicacion },
        { withCredentials: true }
      )
      .then((res) => res.data)
      .then((data) => {
        toast.success("Actualizando cambios!", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      })
      .catch((err) => {
        window.alert("ERROR");
      });
  };

  console.log("biografia", ubicacion);

  return (
    <>
      <form action="post" className="cuenta-form" onSubmit={handleSubmit}>
        <div className="cuenta-div">
          <label className="cuenta-label">Nombre de usuario</label>{" "}
          <input
            type="text"
            className="cuenta-input"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="cuenta-div">
          <label className="cuenta-label">Correo electrónico</label>{" "}
          <input
            type="text"
            className="cuenta-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="cuenta-div">
          <label className="cuenta-label">Biografía</label>{" "}
          <input
            type="text"
            className="cuenta-input"
            value={biografia}
            onChange={(e) => setBiografia(e.target.value)}
          />
        </div>
        <div className="cuenta-div">
          <label className="cuenta-label">Ubicación</label>{" "}
          <input
            type="text"
            className="cuenta-input"
            value={ubicacion}
            onChange={(e) => setUbicacion(e.target.value)}
          />
        </div>
        <button className="cuenta-btn">Guardar cambios</button>
      </form>
    </>
  );
};

export default Cuenta;
