const { generateProductsDispensaries } = require("../../utils/dbSeedHelpers");

const productsDispensaries = generateProductsDispensaries();

exports.seed = function (knex) {
  return knex("products_dispensaries")
    .del()
    .then(function () {
      return knex("products_dispensaries").insert(productsDispensaries);
    });
};
