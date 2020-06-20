exports.seed = function (knex) {
  return knex("users_products")
    .del()
    .then(function () {
      return knex("users_products").insert();
    });
};
