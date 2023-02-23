/*
verifies the token in header to check whether logged in
*/

require("dotenv").config();
const jwt = require("jsonwebtoken");

function authenticate(req, res, next) {
  const { token } = req.headers;
  if (!token) res.status(401).send({ message: "Please login" });
  const match = jwt.verify(token, process.env.KEY);
  if (match) {
    req.body.userID = match.id;
    next();
  } else res.status(401).send({ message: "Please login" });
}

module.exports = authenticate;
