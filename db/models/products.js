const db = require("../dbConfig");
const { getBy } = require("./global");

const getDispensary = id => {
  return db("dispensaries").where({ id }).first();
};

const getReviews = product_id => {
  return db("reviews as r")
    .select(
      "r.user_id",
      "r.rate",
      "r.description",
      "r.created_at",
      "updated_at"
    )
    .where({ product_id });
};

const create = async product => {
  const [id] = await db("products").insert(product, "id");
  return getBy("products", { id });
};

module.exports = { getDispensary, getReviews, create };
