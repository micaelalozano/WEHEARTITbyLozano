const Sequelize = require("sequelize");

const db = new Sequelize("noah95", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
