```
Checks whether a certain password is present in the header
```;
require("dotenv").config();

function authenticateStrict(req, res, next) {
  const { password } = req.headers;
  if (password === process.env.ACCESS_CODE) next();
  else res.send({ message: "You are not authorised for this operation" });
}

module.exports = { authenticateStrict };
