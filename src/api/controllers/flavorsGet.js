const { getAll } = require("../../db/models/global.js");

const TABLE_NAME = "flavors";

const getFlavors = async (req, res) => {
  try {
    const flavors = await getAll(TABLE_NAME);
    res.status(200).json(flavors);
  } catch ({ message }) {
    res.status(500).json({
      message: "The flavors list can't be retrieved at this moment",
      reason: message,
    });
  }
};

const getFlavorById = async (req, res) => {
  res.status(200).json(req.flavor);
};

module.exports = { getFlavors, getFlavorById };
