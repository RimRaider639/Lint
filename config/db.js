const mg = require("mongoose");
require("dotenv").config();

const connection = mg.connect(process.env.DB_URL);

module.exports = { connection };
