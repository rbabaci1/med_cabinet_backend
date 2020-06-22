const db = require("../dbConfig");

const get = async () => {
  return db("users as u").select(
    "u.id",
    "u.first_name",
    "u.last_name",
    "u.email",
    "u.username",
    "u.created_at"
  );
};

const getProducts = async user_id => {
  return db("users_products as u_p")
    .join("users as u", "u_p.user_id", "u.id")
    .join("products as p", "u_p.product_id", "p.id")
    .select("p.*")
    .where({ user_id });
};

const getReviews = user_id => {
  return db("ratings as r")
    .select(
      "r.product_id",
      "r.rate",
      "r.description",
      "r.created_at",
      "updated_at"
    )
    .where({ user_id });
};

module.exports = { get, getProducts, getReviews };
