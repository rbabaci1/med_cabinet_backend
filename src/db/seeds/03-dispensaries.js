const fakeDispensaries = require("../mockData/dispensaries");

exports.seed = function (knex) {
  return knex("dispensaries")
    .del()
    .then(function () {
      return knex("dispensaries").insert(fakeDispensaries);
    });
};
