const db = require("../dbConfig");

const getFlavors = product_id => {
  return db("products_flavors as p_f")
    .join("products as p", "p_f.product_id", "p.id")
    .join("flavors as f", "p_f.flavor_id", "f.id")
    .select("f.*")
    .where({ product_id });
};

const getEffects = product_id => {
  return db("products_flavors as p_f")
    .join("products as p", "p_f.product_id", "p.id")
    .join("effects as e", "p_f.flavor_id", "e.id")
    .select("e.*")
    .where({ product_id });
};

const getProvider = product_id => {
  return db("products_dispensaries as p_d")
    .join("products as p", "p_d.product_id", "p.id")
    .join("dispensaries as d", "p_d.dispensary_id", "d.id")
    .select("d.*")
    .where({ product_id });
};

const getRatings = product_id => {
  return db("ratings as r")
    .select("r.rate", "r.description", "r.created_at", "updated_at")
    .where({ product_id });
};

module.exports = { getProvider, getFlavors, getEffects, getRatings };
