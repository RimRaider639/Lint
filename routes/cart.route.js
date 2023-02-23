const express = require("express");
const CartItem = require("../models/cartItem.model");
const authenticate = require("../middlewares/authenticate.middleware");
const cartRouter = express.Router();

cartRouter.use(authenticate);

cartRouter.get("/", (req, res, next) => {
  CartItem.find({ userID: req.body.userID })
    .then((data) => res.send(data))
    .catch(next);
});

cartRouter.post("/", async (req, res, next) => {
  try {
    const found = await CartItem.find({ productID: req.body.productID });
    if (found.length)
      await CartItem.findByIdAndUpdate(found[0]._id, {
        count: found[0].count + 1,
      });
    else await CartItem.insertMany([req.body]);
    res.send({ data: found[0], message: "Item successfully added to cart" });
  } catch (error) {
    next(error);
  }
});

cartRouter.patch("/:id", (req, res, next) => {
  CartItem.findByIdAndUpdate(req.params.id, req.body)
    .then((data) =>
      res.send({ data, message: "Cart item successfully updated" })
    )
    .catch(next);
});

cartRouter.delete("/:id", (req, res, next) => {
  CartItem.findByIdAndDelete(req.params.id)
    .then((_) => res.send({ message: "Cart item successfully deleted" }))
    .catch(next);
});

module.exports = cartRouter;
