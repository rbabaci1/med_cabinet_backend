const db = require("../dbConfig");
const { getBy } = require("./global");

const getProducts = dispensary_id => {
  return db("products as p")
    .select(
      "p.id",
      "p.strain_name",
      "p.strain_category",
      "p.strain_type",
      "p.flavors",
      "p.effects",
      "p.avg_thc",
      "p.avg_cbd",
      "p.price",
      "p.price_unit",
      "p.description",
      "p.img_url",
      "p.is_available",
      "p.created_at"
    )
    .where({ dispensary_id });
};

const getBusinessHours = dispensary_id => {
  return db("dispensaries_hours as d_h")
    .join("dispensaries as d", "d_h.dispensary_id", "d.id")
    .select("d_h.day_of_week", "d_h.open_time", "d_h.close_time")
    .where({ dispensary_id });
};

const create = async newDispensary => {
  const [id] = await db("dispensaries").insert(newDispensary, "id");
  return getBy("dispensaries", { id });
};

module.exports = { getProducts, getBusinessHours, create };
