const Dispensary = require("../../db/models/dispensaries");

const createDispensary = async (req, res, next) => {
  try {
    const createdDispensary = await Dispensary.create(req.body);

    res.status(201).json({ success: true, createdDispensary });
  } catch (error) {
    next(error);
  }
};

module.exports = { createDispensary };
