const productsFlavors = require("../mockData/productsFlavors");

exports.seed = function (knex) {
  return knex("products_flavors")
    .del()
    .then(function () {
      return knex("products_flavors").insert(productsFlavors);
    });
};
