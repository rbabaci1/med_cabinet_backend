const generateProducts = require("../../utils/productsSeedHelper");

const products = generateProducts();
const firstHalf = products.slice(0, 49);
const secondHalf = products.splice(49);

exports.seed = function (knex) {
  return knex("products")
    .del()
    .then(function () {
      return knex("products").insert(firstHalf);
    })
    .then(function () {
      return knex("products").insert(secondHalf);
    });
};
