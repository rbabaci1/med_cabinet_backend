const effects = require("../mockData/effects");

exports.seed = function (knex) {
  return knex("effects")
    .del()
    .then(function () {
      return knex("effects").insert(effects);
    });
};
