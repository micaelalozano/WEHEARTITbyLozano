const Users = require("./Users");
const Publicaciones = require("./Publicaciones");

Users.hasMany(Publicaciones, { foreignKey: 'userId' });
Publicaciones.belongsTo(Users, { foreignKey: 'userId' });

module.exports = { Users, Publicaciones };
