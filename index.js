const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connection } = require("./config/db");
const { usersRouter } = require("./routes/users.router");
const { productsRouter } = require("./routes/products.route");

const app = express();

app.use(express.json(), cors());

app.use("/users", usersRouter);
app.use("/products", productsRouter);

app.listen(process.env.PORT, async () => {
  console.log(`Server is running at port ${process.env.PORT}`);
  await connection;
  console.log("Connected to DB");
});
