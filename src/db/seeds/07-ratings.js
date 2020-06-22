const fakeRatings = require("../mockData/ratings");

exports.seed = function (knex) {
  return knex("ratings")
    .del()
    .then(function () {
      return knex("ratings").insert(fakeRatings);
    });
};
