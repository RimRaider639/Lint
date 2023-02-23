const mg = require("mongoose");

const productSchema = mg.Schema({
  crawl_timestamp: { type: Date, default: Date.now() },
  product_name: { type: String, required: true },
  product_category_tree: [{ type: String, required: true }],
  pid: { type: String, required: true },
  retail_price: { type: Number, required: true },
  discounted_price: { type: Number, default: this.retail_price },
  image: [{ type: String, required: true }],
  description: { type: String, required: true },
  product_rating: { type: String, default: "No rating available" },
  overall_rating: { type: String, default: "No rating available" },
  brand: { type: String, required: true },
  product_specifications: Object,
  rating: { type: Number, required: true },
  stock: { type: Number, required: true },
  discount: { type: Number, default: 0 },
});

const Product = mg.model("product", productSchema);

module.exports = Product;
