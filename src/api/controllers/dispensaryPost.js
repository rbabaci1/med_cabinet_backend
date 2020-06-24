const Dispensary = require("../../db/models/dispensaries");
const now = require("../../helpers/getLocalDateTime");
const removeObjKey = require("../../helpers/removeObjKey");

const createDispensary = async (req, res, next) => {
  try {
    let newDispensary = { ...req.body, created_at: now() };
    newDispensary = removeObjKey(newDispensary, "dispensary_hours");
    let businessHours = newDispensary.businessHours;

    const createdDispensary = await Dispensary.create(newDispensary);
    res.status(201).json({ success: true });
  } catch (error) {
    next(error);
  }
};

module.exports = { createDispensary };
