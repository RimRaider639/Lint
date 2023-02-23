const mg = require("mongoose");

const cartItemSchema = mg.Schema({
  productID: { type: mg.Schema.Types.ObjectId, required: true, ref: "product" },
  userID: { type: mg.Schema.Types.ObjectId, required: true, ref: "user" },
  count: { type: Number, default: 1 },
});

const CartItem = mg.model("cartItem", cartItemSchema);

module.exports = CartItem;
