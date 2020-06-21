const { getAll } = require("../../db/models/global");

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

const getProductFullInfo = (req, res) => {
  try {
  } catch (error) {}
};

module.exports = { getProducts, getProductFullInfo };
