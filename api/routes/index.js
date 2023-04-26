const express = require("express");
const router = express.Router();
const users = require("./users");
const propiedades = require("./propiedades");
const favoritos = require("./favoritos");

router.use("/users", users);
router.use("/propiedades", propiedades);
router.use("/favoritos", favoritos);

module.exports = router;
