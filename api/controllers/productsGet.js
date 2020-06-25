const removeObjKey = require("../../helpers/removeObjKey");
const { getAll } = require("../../db/models/global");
const Product = require("../../db/models/products");

const TABLE_NAME = "products";

// GET all available products
const getProducts = async (req, res, next) => {
  try {
    const { limit } = req.query;
    let products;

    if (limit) {
      products = await Product.getNumOfProducts(limit);
    } else {
      products = await getAll(TABLE_NAME);
    }

    res.status(200).json(products);
  } catch (error) {
    next(error);
  }
};

// GET all details about a product
const getProductById = async ({ product }, res, next) => {
  try {
    const provider = await Product.getDispensary(product.dispensary_id);
    const reviews = await Product.getReviews(product.id);
    const resultObj = removeObjKey(product, "dispensary_id");

    res.status(200).json({ ...resultObj, provider, reviews });
  } catch (error) {
    next(error);
  }
};

module.exports = { getProducts, getProductById };
