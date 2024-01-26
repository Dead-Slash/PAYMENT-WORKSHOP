const mongoose = require("mongoose");
const Product_schema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    price: Number,
    description: String,
    image: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("products", Product_schema);
