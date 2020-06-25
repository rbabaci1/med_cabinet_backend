const dispensariesHours = require("../mockData/dispensariesHours");

exports.seed = function (knex) {
  return knex("dispensaries_hours")
    .del()
    .then(function () {
      return knex("dispensaries_hours").insert(dispensariesHours);
    });
};
