const { getAll } = require("../../db/models/global.js");
const {
  getDispensaryHours,
  getDispensaryProducts,
} = require("../../db/models/dispensaries");

const TABLE_NAME = "dispensaries";

const getDispensaries = async (req, res) => {
  try {
    const dispensaries = await getAll(TABLE_NAME);
    res.status(200).json(dispensaries);
  } catch ({ message }) {
    res.status(500).json({
      message: "The dispensaries list can't be retrieved at this moment",
      reason: message,
    });
  }
};

const getDispensaryById = async (req, res) => {
  try {
    const { dispensary } = req;
    const business_hours = await getDispensaryHours(dispensary.id);
    const products = await getDispensaryProducts(dispensary.id);

    res.status(200).json({ ...dispensary, business_hours, products });
  } catch ({ message }) {
    res.status(500).json({
      message: "The dispensary details can't be retrieved at this moment",
      reason: message,
    });
  }
};

module.exports = { getDispensaries, getDispensaryById };
