const { getAll } = require("../../db/models/global");
const Product = require("../../db/models/products");

const getProducts = async (req, res) => {
  try {
    const products = await getAll("products");
    res.status(200).json(products);
  } catch ({ message }) {
    res.status(500).json({
      message: "The products list can't be retrieved at this moment",
      reason: message,
    });
  }
};

const getProductById = (req, res) => {
  res.status(200).json(req.product);
};

const getProductFullInfo = async (req, res) => {
  try {
    const { product, params } = req;
    const provider = await Product.getProvider(params.id);
    const flavors = await Product.getFlavors(params.id);
    const effects = await Product.getEffects(params.id);

    res.status(200).json({ ...product, provider, flavors, effects });
  } catch ([message]) {
    res.status(500).json({ reason: message });
  }
};

module.exports = { getProducts, getProductById, getProductFullInfo };
