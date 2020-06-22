const db = require("../dbConfig");

const getDispensaryHours = dispensary_id => {
  return db("dispensaries_hours as d_h")
    .join("dispensaries as d", "d_h.dispensary_id", "d.id")
    .select("d_h.day_of_week", "d_h.open_time", "d_h.close_time")
    .where({ dispensary_id });
};

const getDispensaryProducts = dispensary_id => {
  return db("products_dispensaries as p_d")
    .join("dispensaries as d", "p_d.dispensary_id", "d.id")
    .join("products as p", "p_d.product_id", "p.id")
    .select("p.*")
    .where({ dispensary_id });
};

module.exports = { getDispensaryHours, getDispensaryProducts };
