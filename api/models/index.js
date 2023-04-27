const Propiedades = require("./Propiedades");
const Users = require("./Users");

Users.belongsToMany(Propiedades,{through: "favorite_user"})
Propiedades.belongsToMany(Users,{through: "favorite_user"})

module.exports = { Users, Propiedades };
