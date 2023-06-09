const express = require("express");
const { generateToken, validateToken } = require("../utils/token"); //Para poder hacer el login con Auth
const { validateAuth } = require("../middlewares/auth");
const { Users } = require("../models");
const router = express.Router();

//Crear usuario:
router.post("/", (req, res) => {
  const {
    username,
    name,
    lastname,
    email,
    password,
    imagen,
    portada,
    biografia,
    ubicacion,
  } = req.body;
  Users.create({
    username,
    name,
    lastname,
    email,
    password,
    imagen,
    portada,
    biografia,
    ubicacion,
  }).then((data) => {
    res.status(201).send(data);
  });
});

//Buscar todos los usuarios:
router.get("/", (req, res) => {
  Users.findAll().then((data) => {
    res.status(200).send(data);
  });
});

//Buscar los usuarios por USERNAME:
router.get("/:username", (req, res) => {
  const { username } = req.params;

  Users.findAll({ where: { username } }).then((data) => {
    res.status(200).send(data);
  });
});

//Actualizar usuarios (Cambiar Foto de perfil):
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { imagen } = req.body;

  Users.update({ imagen }, { where: { id } }).then((data) => {
    res.status(200).send(data);
  });
});

//Actualizar usuarios (Cambiar Foto de portada):
router.put("/cambiar_portada/:id", (req, res) => {
  const { id } = req.params;
  const { portada } = req.body;

  Users.update({ portada }, { where: { id } }).then((data) => {
    res.status(200).send(data);
  });
});

//Actualizar usuarios (Cambiar datos de usuario):
router.put("/configuraciones/:id", (req, res) => {
  const { id } = req.params;
  const { username, email, biografia, ubicacion } = req.body;

  Users.update(
    { username, email, biografia, ubicacion },
    { where: { id } }
  ).then((data) => {
    res.status(200).send(data);
  });
});

//Eliminar usuarios:
router.delete("/:id", (req, res) => {
  const { id } = req.params;

  Users.destroy({ where: { id } }).then((data) => {
    res.send("Eliminado");
  });
});

//Rutas para hacer el login con Auth:
router.post("/login", (req, res) => {
  const { email, password } = req.body;

  Users.findOne({ where: { email } }).then((user) => {
    if (!user) return res.sendStatus(401);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(401);

      const payload = {
        username: user.username,
        name: user.name,
        lastname: user.lastname,
        email: user.email,
        imagen: user.imagen,
        portada: user.portada,
        biografia: user.biografia,
        ubicacion: user.ubicacion,
      };

      const token = generateToken(payload);
      console.log(token);
      res.cookie("token", token);

      res.send(payload);
    });
  });
});

//Ruta para hacer el login con Auth (poner una barra antes del /me cuando se pedido GET para que no entre en otra ruta):
router.get("/ruta/me", validateAuth, (req, res) => {
  //console.log(req.user);
  res.send(req.user);
});

// Esto seria /secret (usuario logueado en el momento)
router.get("/ruta/perfil", validateAuth, (req, res) => {
  res.send(req.user);
});

router.post("/logout", (req, res) => {
  res.clearCookie("token");

  res.sendStatus(204);
});

module.exports = router;
