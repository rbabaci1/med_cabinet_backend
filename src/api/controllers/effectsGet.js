const { getAll } = require("../../db/models/global.js");

const TABLE_NAME = "effects";

const getEffects = async (req, res) => {
  try {
    const effects = await getAll(TABLE_NAME);
    res.status(200).json(effects);
  } catch ({ message }) {
    res.status(500).json({
      message: "The effects list can't be retrieved at this moment",
      reason: message,
    });
  }
};

const getEffectById = (req, res) => {
  res.status(200).json(req.effect);
};

module.exports = { getEffects, getEffectById };
