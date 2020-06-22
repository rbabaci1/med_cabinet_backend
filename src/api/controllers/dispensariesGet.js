const { getAll } = require("../../db/models/global.js");

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
  res.status(200).json(req.dispensary);
};

module.exports = { getDispensaries, getDispensaryById };
