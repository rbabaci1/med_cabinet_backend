const { default: Axios } = require("axios");

const Product = require("../../db/models/products");
const now = require("../../helpers/getLocalDateTime");
const { getBy } = require("../../db/models/global");

const getRecommendations = async (req, res, next) => {
  try {
    const response = await Axios.post(
      "https://medicabi.herokuapp.com/send",
      req.body
    );
    const { UserID, Strain: strain_name } = response.data;
    const fullProduct = await getBy("products", { strain_name });

    res.status(200).json({ UserID, ...fullProduct });
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
