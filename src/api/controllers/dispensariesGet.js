const { getAll } = require("../../db/models/global.js");

const Dispensary = require("../../db/models/dispensaries");

const TABLE_NAME = "dispensaries";

const getDispensaries = async (req, res, next) => {
  try {
    const dispensaries = await getAll(TABLE_NAME);
    res.status(200).json(dispensaries);
  } catch (error) {
    next(error);
  }
};

const getDispensaryById = async ({ dispensary }, res, next) => {
  try {
    const business_hours = await Dispensary.getBusinessHours(dispensary.id);
    const products = await Dispensary.getProducts(dispensary.id);

    res.status(200).json({ ...dispensary, business_hours, products });
  } catch (error) {
    next(error);
  }
};

module.exports = { getDispensaries, getDispensaryById };
