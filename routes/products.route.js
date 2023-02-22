const express = require("express");
const fs = require("fs");
const { Product } = require("../models/product.model");

const productsRouter = express.Router();

productsRouter.get("/add", (req, res, next) => {
  fs.readFile("db.json", "utf8", (err, json) => {
    if (err) {
      next(err);
    }
    Product.insertMany(JSON.parse(json))
      .then((_) => res.send({ message: "Data Successfully added" }))
      .catch(next);
  });
});

productsRouter.get("/", (req, res, next) => {
  console.log(req.query);
  const { page, limit, ...filters } = req.query;
  Product.find(filters)
    .limit(limit)
    .skip(page * limit)
    .then((data) => {
      res.send(data);
    })
    .catch(next);
});

productsRouter.post("/", (req, res) => {});

module.exports = { productsRouter };
