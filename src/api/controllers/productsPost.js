const axios = require("axios");

const { getBy } = require("../../db/models/global");
const Product = require("../../db/models/products");

const TABLE_NAME = "products";

const getRecommendations = async (req, res, next) => {
  try {
    const userInfo = req.body;

    const recommendations = await axios.post(
      "https://medicabi.herokuapp.com/send",
      userInfo
    );
    console.log(recommendations);
  } catch (error) {
    next(error);
  }
};

module.exports = { getRecommendations };
