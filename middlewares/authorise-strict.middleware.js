/*
Checks whether a certain password is present in the header
*/

require("dotenv").config();

function authoriseStrict(req, res, next) {
  const { password } = req.headers;
  if (password === process.env.ACCESS_CODE) next();
  else
    res
      .status(403)
      .send({ message: "You are not authorised for this operation" });
}

module.exports = authoriseStrict;
