import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
//Estilos
import "../estilos/login.css";

const Register = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imagen, setImagen] = useState("");
  const [portada, setPortada] = useState("");
  const [biografia, setBiografia] = useState("");
  const [ubicacion, setUbicacion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("api/users", {
        username: username,
        name: name,
        lastname: lastname,
        email: email,
        password: password,
        imagen: imagen,
        portada: portada,
        biografia: biografia,
        ubicacion: ubicacion,
      })
      .then((res) => res.data)
      .then(() => {
        navigate("/login");
      });
  };

  console.log("esto es", username, name, lastname, email, password, imagen);

  return (
    <>
      <div className="login-contenedor">
        <img
          className="login-img"
          src="https://data.whicdn.com/avatars/13431676/profile.png?t=1528298948"
          alt="Logo"
        />
        <h2 className="login-h2">REGISTRARME</h2>
        <form className="form-login" onSubmit={handleSubmit} type="form">
          <label className="login-label">Nombre de usuario</label>
          <input
            className="register-input"
            type="text"
            required
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
          <label className="login-label">Nombre</label>
          <input
            className="register-input"
            type="text"
            required
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
          <label className="login-label">Apellido</label>
          <input
            className="register-input"
            type="text"
            required
            onChange={(e) => setLastname(e.target.value)}
            value={lastname}
          />
          <label className="login-label">Correo Electrónico</label>
          <input
            className="register-input"
            type="text"
            required
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <label className="login-label">Contraseña</label>
          <input
            className="register-input-dos"
            type="password"
            required
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Link to="/login">
            <p className="login-p">Ya estás registrado? Haz click aquí</p>
          </Link>
          <button className="login-btn">REGISTRAR</button>
        </form>
      </div>
    </>
  );
};

export default Register;
