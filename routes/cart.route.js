const express = require("express");
const CartItem = require("../models/cartItem.model");
const authenticate = require("../middlewares/authenticate.middleware");
const cartRouter = express.Router();

cartRouter.use(authenticate);

cartRouter.get("/", (req, res, next) => {
  CartItem.find({ userID: req.body.userID })
    // .populate("product", "product_name")
    .then((data) => res.send(data))
    .catch(next);
});

cartRouter.post("/", async (req, res, next) => {
  try {
    const found = await CartItem.find({ productID: req.body.productID });
    console.log(found);
    if (found.length)
      CartItem.findByIdAndUpdate(found[0]._id, { count: ++found[0].count });
    else await CartItem.insertMany([req.body]);
    res.send({ data: found[0], message: "Item successfully added to cart" });
  } catch (error) {
    next(error);
  }
});

module.exports = cartRouter;
