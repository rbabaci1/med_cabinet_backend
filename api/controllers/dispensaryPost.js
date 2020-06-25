const Dispensary = require("../../db/models/dispensaries");
const now = require("../../helpers/getLocalDateTime");
const removeObjKey = require("../../helpers/removeObjKey");
const serializeBusinessHours = require("../../helpers/serializeBusinessHours");

const createDispensary = async (req, res, next) => {
  try {
    let dispensary = { ...req.body, created_at: now() };
    let businessHours = dispensary.dispensary_hours;

    dispensary = removeObjKey(dispensary, "dispensary_hours");

    const createdDispensary = await Dispensary.create(dispensary);
    businessHours = serializeBusinessHours(businessHours, createdDispensary.id);
    await Dispensary.insertBusinessHours(businessHours);

    res.status(201).json({ success: true, createdDispensary });
  } catch (error) {
    next(error);
  }
};

module.exports = { createDispensary };
