const db = require("../dbConfig");
const { getBy } = require("../../db/models/global");

const get = async () => {
  return db("users as u").select(
    "u.id",
    "u.firstName",
    "u.lastName",
    "u.created_at"
  );
};

const getProducts = async user_id => {
  return db("users_carts as u_c")
    .join("users as u", "u_c.user_id", "u.id")
    .join("products as p", "u_c.product_id", "p.id")
    .select("p.*")
    .where({ user_id });
};

const getReviews = user_id => {
  return db("reviews as r")
    .select(
      "r.product_id",
      "r.rate",
      "r.description",
      "r.created_at",
      "updated_at"
    )
    .where({ user_id });
};

const create = async newUser => {
  const [id] = await db("users").insert(newUser, "id");
  return getBy("users", { id });
};

const addToCart = userProductIds => {
  return db("users_carts").insert(userProductIds);
};

const createReview = newReview => {
  return db("reviews").insert(newReview);
};

module.exports = {
  get,
  getProducts,
  getReviews,
  create,
  addToCart,
  createReview,
};
