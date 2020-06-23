const { getBy } = require("../../db/models/global");
const Product = require("../../db/models/products");

const TABLE_NAME = "products";

const getRecommendations = async (req, res, next) => {
  const userInfo = req.body;

  const rawResponse = await fetch("https://medicabi.herokuapp.com/send", {
    method: "POST",
    body: userInfo,
  });
  const recommendations = await rawResponse.json();

  console.log(recommendations);
};

module.exports = { getRecommendations };
