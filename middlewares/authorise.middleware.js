/*
Checks whether the logged in user is an admin
*/
const User = require("../models/user.model");

function isAdmin(req, res, next) {
  User.findById(req.body.userID)
    .then((user) =>
      user.role === "admin"
        ? next()
        : res
            .status(403)
            .send({ message: "You are not authorised for this operation" })
    )
    .catch(next);
}

module.exports = isAdmin;
