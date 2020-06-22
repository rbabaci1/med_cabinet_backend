const fakeUsers = require("../mockData/users");

exports.seed = function (knex) {
  return knex("users")
    .del()
    .then(function () {
      return knex("users").insert(fakeUsers);
    });
};
