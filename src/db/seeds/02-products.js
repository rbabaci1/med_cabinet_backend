const generateProducts = require("../../utils/productsSeedHelper");

exports.seed = function (knex) {
  const products = generateProducts();

  return knex("products")
    .del()
    .then(function () {
      return knex("products").insert(products);
    });
};
