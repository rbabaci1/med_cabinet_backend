const Dispensary = require("../../db/models/dispensaries");

const createDispensary = async (req, res) => {
  res.send("made it");
};

module.exports = { createDispensary };
