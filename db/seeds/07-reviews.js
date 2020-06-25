const reviews = require("../mockData/reviews");

exports.seed = function (knex) {
  return knex("reviews")
    .del()
    .then(function () {
      return knex("reviews").insert(reviews);
    });
};
