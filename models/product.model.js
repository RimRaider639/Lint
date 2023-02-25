const mg = require("mongoose");

const productSchema = mg.Schema({
  crawl_timestamp: { type: Date, default: Date.now() },
  product_name: { type: String, required: true },
  product_category_tree: [{ type: String, required: true }],
  pid: { type: String, required: true },
  retail_price: { type: Number, default: 100 },
  discounted_price: { type: Number, default: this.retail_price },
  image: [{ type: String, required: true }],
  description: { type: String, required: true },
  brand: { type: String, required: true },
  product_specifications: { type: Object },
  rating: { type: Number, default: 0 },
  stock: { type: Number, required: true },
  discount: { type: Number, default: 0 },
});

productSchema.index({
  "$**": "text",
  "product_category_tree.$**": "text",
});

const Product = mg.model("product", productSchema);

module.exports = Product;
