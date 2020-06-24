const { default: Axios } = require("axios");

const { getBy } = require("../../db/models/global");

const TABLE_NAME = "products";

const getRecommendations = async (req, res, next) => {
  try {
    const data = req.body;

    const response = await Axios.post(
      "https://medicabi.herokuapp.com/send",
      data
    );
    res.status(200).json(response.data);
  } catch (error) {
    next(error);
  }
};

const createProduct = async (req, res, next) => {
  try {
    res.status(201).json({ message: "made it" });
  } catch (error) {
    next(error);
  }
};

module.exports = { getRecommendations, createProduct };
