const express = require("express");
const {
  createProduct,
  getProduct,
  delete_Product,
  updateProduct,
  payment,
} = require("../Controller/Controller");

const Product_router = express.Router();
Product_router.post("/create", createProduct);
Product_router.get("/get", getProduct);
Product_router.delete("/delete/:id", delete_Product);
Product_router.put("/update/:id", updateProduct);
Product_router.post("/create-checkout-session", payment);
module.exports = Product_router;
