const express = require("express");
const router = express.Router();
const users = require("./users");
const publicaciones = require("./publicaciones");

router.use("/users", users);
router.use("/publicaciones", publicaciones);

module.exports = router;
