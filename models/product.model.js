const mg = require("mongoose");

const productSchema = mg.Schema({
  crawl_timestamp: String,
  product_name: String,
  product_category_tree: [String],
  pid: String,
  retail_price: Number,
  discounted_price: Number,
  image: Array,
  description: String,
  product_rating: String,
  overall_rating: String,
  brand: String,
  product_specifications: Object,
  rating: Number,
  stock: Number,
  discount: Number,
});

const Product = mg.model("product", productSchema);

module.exports = { Product };
