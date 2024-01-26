const products = require("../Model/Model");
const stripe = require("stripe");

const stripeScretKey = stripe(
  "sk_test_51Ocm8hK9wlYYfuQlksw4XF8kH9sIeSufOWbWxaeWnOUnx5SfpUzlK2P198pe6t5iFVCxcAwg80LbZSLCdzX90khb00bc1ZMUhj"
);

exports.createProduct = async (req, res) => {
  console.log(req.body);
  try {
    const product = new products(req.body);
    await product.save();
    res.status(200).send({ message: "product has been created!", product });
  } catch (error) {
    res.status(500).send({ message: "Failed to create product!", error });
  }
};

exports.getProduct = async (req, res) => {
  try {
    const all_products = await products.find();
    res
      .status(200)
      .send({ msg: "Users list found", all_products: all_products });
  } catch (error) {
    res.status(500).send({ msg: "failed to find users list!" });
  }
};

exports.delete_Product = async (req, res) => {
  const id = req.params.id;
  try {
    const delete_product = await products.findByIdAndDelete(id);
    res.status(200).send({
      msg: "product has benn deleted",
      product_deleted: delete_product,
    });
  } catch (error) {
    res.status(500).send({ msg: "failed to delete product" });
  }
};

exports.updateProduct = async (req, res) => {
  const id = req.params.id;

  try {
    const product = await products.findByIdAndUpdate(id, { $set: req.body });
    res
      .status(200)
      .send({ msg: "product has benn updated", product_updated: products });
  } catch (error) {
    res.status(500).send({ msg: "failed to update" });
  }
};

exports.payment = async (req, res) => {
  const items = req.body.cart.map((item) => ({
    price_data: {
      currency: "usd",
      unit_amount: item.product.price * 100,
      product_data: {
        name: item.product.title,
        description: item.product.description,
        images: [item.product.image],
        metadata: { id: item.product.id },
      },
    },
    quantity: item.quantity,
  }));
  const session = await stripeScretKey.checkout.sessions.create({
    line_items: items,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/rejected",
  });
  res.send({ url: session.url });
};
