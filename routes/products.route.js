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
      .then((_) => res.send({ message: "Data successfully added" }))
      .catch(next);
  });
});

productsRouter.get("/removeall", (req, res, next) => {
  Product.remove({})
    .then((_) => res.send({ message: "Data successfully removed" }))
    .catch(next);
});

productsRouter.get("/", (req, res, next) => {
  const {
    page,
    limit,
    category,
    subCategory,
    sub2Category,
    sub3Category,
    sort,
    order,
    ...filters
  } = req.query;
  if (category) Object.assign(filters, { "product_category_tree.0": category });
  if (subCategory)
    Object.assign(filters, {
      "product_category_tree.1": { $eq: subCategory },
    });
  if (sub2Category)
    Object.assign(filters, {
      "product_category_tree.2": { $eq: sub2Category },
    });
  if (sub3Category)
    Object.assign(filters, {
      "product_category_tree.2": { $eq: sub3Category },
    });
  Product.find(filters)
    .limit(limit)
    .skip(page * limit)
    .sort({ [sort]: order == "desc" ? -1 : 1 })
    .then((data) => {
      res.send(data);
    })
    .catch(next);
});

productsRouter.post("/", (req, res) => {});

module.exports = { productsRouter };
