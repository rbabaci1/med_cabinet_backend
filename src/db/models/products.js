const db = require("../dbConfig");

const getNumOfProducts = limit => {
  db("products").limit(limit);
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

module.exports = { getNumOfProducts, getDispensary, getReviews };
