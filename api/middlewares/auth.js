const { validateToken } = require("../utils/token");
const Users = require("../models/Users");

function validateAuth(req, res, next) {
  const token = req.cookies.token;
  if (!token) return res.sendStatus(401);

  const { user } = validateToken(token);
  if (!user) return res.sendStatus(401);

  Users.findOne({ where: { username: user.username } }).then((dbUser) => {
    if (!dbUser) return res.sendStatus(401);

    req.user = dbUser.toJSON();
    next();
  });
}

module.exports = { validateAuth };