const mg = require("mongoose");

const userSchema = mg.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  pwd: { type: String, required: true },
  mobile: { type: String },
  country: { type: String },
  city: { type: String },
  role: {
    type: String,
    enum: ["customer", "admin"],
    required: true,
    lowercase: true,
    default: "customer",
  }, // customer, admin
});

const User = mg.model("user", userSchema);

module.exports = { User };
