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

const getDispensary = id => {
  return db("dispensaries").where({ id }).first();
};

const getReviews = product_id => {
  return db("ratings as r")
    .select(
      "r.user_id",
      "r.rate",
      "r.description",
      "r.created_at",
      "updated_at"
    )
    .where({ product_id });
};

module.exports = { getDispensary, getFlavors, getEffects, getReviews };
