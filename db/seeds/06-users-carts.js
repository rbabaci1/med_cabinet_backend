const usersCarts = require("../mockData/usersCarts");

exports.seed = function (knex) {
  return knex("users_carts")
    .del()
    .then(function () {
      return knex("users_carts").insert(usersCarts);
    });
};
