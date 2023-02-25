const express = require("express");
const CartItem = require("../models/cartItem.model");
const authenticate = require("../middlewares/authenticate.middleware");
const cartRouter = express.Router();
const qtdLimit = 6;

cartRouter.use(authenticate);

cartRouter.get("/", (req, res, next) => {
  const { page, limit, ...filters } = req.query;

  CartItem.find({ userID: req.body.userID, ...filters })
    .populate(
      "productID",
      "product_name image retail_price discounted_price discount pid"
    )
    .limit(limit)
    .skip(page * limit)
    .then((data) => res.send(data))
    .catch(next);
});

cartRouter.post("/", (req, res, next) => {
  CartItem.find({ productID: req.body.productID }).then((found) => {
    if (found.length)
      CartItem.findByIdAndUpdate(found[0]._id, {
        count: found[0].count < qtdLimit ? ++found[0].count : found[0].count,
      })
        .then((_) =>
          res.send({
            data: found[0],
            message: "Item successfully added to cart",
          })
        )
        .catch(next);
    else
      CartItem.insertMany([req.body])
        .then((_) =>
          res.send({
            data: found[0],
            message: "Item successfully added to cart",
          })
        )
        .catch(next);
  });
});

cartRouter.patch("/:id", (req, res, next) => {
  CartItem.findByIdAndUpdate(req.params.id, req.body)
    .then((_) => res.send({ message: "Cart item successfully updated" }))
    .catch(next);
});

cartRouter.delete("/:id", (req, res, next) => {
  CartItem.findByIdAndDelete(req.params.id)
    .then((_) => res.send({ message: "Cart item successfully deleted" }))
    .catch(next);
});

module.exports = cartRouter;
