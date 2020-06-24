const Dispensary = require("../../db/models/dispensaries");
const now = require("../../helpers/getLocalDateTime");

const createDispensary = async (req, res, next) => {
  try {
    const newDispensary = { ...req.body, created_at: now() };
    // const createdDispensary = await Dispensary.create(newDispensary);

    res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = { createDispensary };
