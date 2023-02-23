const express = require("express");
const fs = require("fs");
const { Product } = require("../models/product.model");
const authoriseStrict = require("../middlewares/authorise-strict.middleware");
const authenticate = require("../middlewares/authenticate.middleware");
const isAdmin = require("../middlewares/authorise.middleware");
const productsRouter = express.Router();

//open routes

createRegex = (obj, arrayOfKeys) => {
  const queries = {};
  arrayOfKeys.forEach((key) => {
    const [field, ..._] = key.split("_");
    queries[field] = { $regex: obj[key] };
  });

  return queries;
};

productsRouter.get("/", (req, res, next) => {
  const like = Object.keys(req.query).filter(
    (key) => key.split("_").pop() === "like"
  );
  const queries = createRegex(req.query, like);
  let {
    page,
    limit,
    category,
    subCategory,
    sub2Category,
    sub3Category,
    sort,
    order,
    ...filters
  } = { ...req.query, ...queries };

  if (category) Object.assign(filters, { "product_category_tree.0": category });
  if (subCategory)
    Object.assign(filters, { "product_category_tree.1": subCategory });
  if (sub2Category)
    Object.assign(filters, { "product_category_tree.2": sub2Category });
  if (sub3Category)
    Object.assign(filters, { "product_category_tree.2": sub3Category });
  Product.find(filters)
    .limit(limit)
    .skip(page * limit)
    .sort({ [sort]: order == "desc" ? -1 : 1 })
    .then((data) => {
      res.send(data);
    })
    .catch(next);
});

productsRouter.get("/:id", (req, res, next) => {
  console.log(req.params);
  const { id } = req.params;
  Product.findById(id)
    .then((data) => res.send(data))
    .catch(next);
});

// requires access code

productsRouter.get("/add", authoriseStrict, (req, res, next) => {
  fs.readFile("db.json", "utf8", (err, json) => {
    if (err) {
      next(err);
    }
    Product.insertMany(JSON.parse(json))
      .then((_) => res.send({ message: "Data successfully added" }))
      .catch(next);
  });
});

productsRouter.get("/removeAll", authoriseStrict, (req, res, next) => {
  Product.remove({})
    .then((_) => res.send({ message: "Data successfully removed" }))
    .catch(next);
});

//requires logging in as an admin

productsRouter.use(authenticate, isAdmin);

productsRouter.post("/", (req, res, next) => {
  const newProduct = new Product(req.body);
  newProduct
    .save()
    .then((_) => res.send({ message: "Product successfully created" }))
    .catch(next);
});

productsRouter.patch("/:id", (req, res, next) => {
  const { id } = req.params;
  Product.findByIdAndUpdate(id, req.body)
    .then((_) =>
      res.send({ message: `Product with ID ${id} is successfully updated` })
    )
    .catch(next);
});

productsRouter.delete("/:id", (req, res, next) => {
  const { id } = req.params;
  Product.findByIdAndDelete(id)
    .then((_) =>
      res.send({ message: `Product with ID ${id} is successfully deleted` })
    )
    .catch(next);
});

module.exports = { productsRouter };
