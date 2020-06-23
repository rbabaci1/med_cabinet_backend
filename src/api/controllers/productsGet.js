const removeObjKey = require("../../helpers/removeObjKey");
const { getAll } = require("../../db/models/global");
const Product = require("../../db/models/products");

const TABLE_NAME = "products";

// GET all available products
const getProducts = async (req, res) => {
  try {
    const products = await getAll(TABLE_NAME);
    res.status(200).json(products);
  } catch ({ message }) {
    res.status(500).json({
      message: "The products list can't be retrieved at this moment",
      reason: message,
    });
  }
};

// GET all details about a product
const getProductById = async ({ product }, res) => {
  try {
    const provider = await Product.getDispensary(product.dispensary_id);
    const reviews = await Product.getReviews(product.id);
    const resultObj = removeObjKey(product, "dispensary_id");

    res.status(200).json({ ...resultObj, provider, reviews });
  } catch ({ message }) {
    res.status(500).json({
      message: "The product details can't be retrieved at this moment",
      reason: message,
    });
  }
};

module.exports = { getProducts, getProductById };
