const mg = require("mongoose");

const userSchema = mg.Schema({});

const User = mg.model("user", userSchema);

module.exports = { User };
