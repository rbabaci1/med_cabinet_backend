const { default: Axios } = require("axios");

const Product = require("../../db/models/products");
const now = require("../../helpers/getLocalDateTime");
const { getBy } = require("../../db/models/global");

const getRecommendations = async (req, res, next) => {
  try {
    const { data } = await Axios.post(
      "https://medicabi.herokuapp.com/send",
      req.body
    );
    const fullProduct = await getBy("products", {
      strain_name: data.Strain,
    });

    res.status(200).json(fullProduct);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    const flavors = req.body.flavors.toString();
    const effects = req.body.effects.toString();
    const product = { ...req.body, flavors, effects, created_at: now() };

    const createdProduct = await Product.create(product);
    res.status(201).json({ success: true, createdProduct });
  } catch (error) {
    next(error);
  }
};

module.exports = { getRecommendations, createProduct };
