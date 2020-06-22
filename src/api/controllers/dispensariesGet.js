const { getAll } = require("../../db/models/global.js");
const { getDispensaryHours } = require("../../db/models/dispensaries");

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

const getDispensaryFullInfo = async (req, res) => {
  try {
    const { dispensary } = req.dispensary;
    const business_hours = await getDispensaryHours(dispensary.id);
    // const dispensaryProducts = await getDispensaryProducts(id)

    res.status(200).json({ ...dispensary, business_hours });
  } catch ({ message }) {
    res.status(500).json({
      message: "The dispensary details can't be retrieved at this moment",
      reason: message,
    });
  }
};

module.exports = { getDispensaries, getDispensaryFullInfo };
