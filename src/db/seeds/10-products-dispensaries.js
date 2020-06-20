const productsDispensaries = require("../mockData/productsDispensaries");

exports.seed = function (knex) {
  return knex("products_dispensaries")
    .del()
    .then(function () {
      return knex("products_dispensaries").insert(productsDispensaries);
    });
};
