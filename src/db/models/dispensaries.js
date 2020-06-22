const db = require("../../db/dbConfig");

const getDispensaryHours = dispensary_id => {
  return db("dispensary_hours as d_h")
    .join("dispensaries as d")
    .select("d.*", "d_h.*")
    .where({ dispensary_id });
};

module.exports = { getDispensaryHours };
