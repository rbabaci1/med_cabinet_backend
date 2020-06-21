const db = require("../dbConfig");

const getFlavors = product_id => {
  return db("products_flavors as p_f")
    .join("products as p", "p_f.product_id", "p.id")
    .join("flavors as f", "p_f.flavor_id", "f.id")
    .select("f.*")
    .where({ product_id });
};

module.exports = { getFlavors };
