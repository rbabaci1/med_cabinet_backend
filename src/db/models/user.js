const db = require("../dbConfig");

const getProducts = async user_id => {
  return db("users_products as u_p")
    .select("p.*")
    .join("users as u", "u_p.user_id", "u.id")
    .join("products as p", "u_p.product_id", "p.id")
    .where({ user_id });
};

const getUserReviews = async user_id => {
  return db("ratings as r")
    .select("r.product_id r.rate r.description r.created_at")
    .where({ user_id });
};

module.exports = { getProducts, getUserReviews };
