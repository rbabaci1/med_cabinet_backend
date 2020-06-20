const productsEffects = require("../mockData/productsEffects");

exports.seed = function (knex) {
  return knex("products_effects")
    .del()
    .then(function () {
      return knex("products_effects").insert(productsEffects);
    });
};
