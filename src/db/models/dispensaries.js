const db = require("../dbConfig");

const getProducts = dispensary_id => {
  return db("products").where({ dispensary_id });
};

const getBusinessHours = dispensary_id => {
  return db("dispensaries_hours as d_h")
    .join("dispensaries as d", "d_h.dispensary_id", "d.id")
    .select("d_h.day_of_week", "d_h.open_time", "d_h.close_time")
    .where({ dispensary_id });
};

module.exports = { getProducts, getBusinessHours };
