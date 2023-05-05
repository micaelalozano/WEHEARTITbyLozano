import React from "react";
import { Link } from "react-router-dom";
//Estilos
import "../estilos/login.css";

const Register = () => {
  return (
    <>
      {" "}
      <div className="login-contenedor">
        <img
          className="login-img"
          src="https://data.whicdn.com/avatars/13431676/profile.png?t=1528298948"
          alt="Logo"
        />
        <h2 className="login-h2">REGISTRARME</h2>
        <form className="form-login" method="post">
          <label className="login-label">Nombre de usuario</label>
          <input className="register-input" type="text" />
          <label className="login-label">Nombre</label>
          <input className="register-input" type="text" />
          <label className="login-label">Apellido</label>
          <input className="register-input" type="text" />
          <label className="login-label">Correo Electrónico</label>
          <input className="register-input" type="text" />
          <label className="login-label">Contraseña</label>
          <input className="register-input-dos" type="password" />
          <Link to="/login">
            <p className="login-p">Ya estás registrado? Haz click aquí</p>
          </Link>
        </form>
        <button className="login-btn">REGISTRAR</button>
      </div>
    </>
  );
};

export default Register;
