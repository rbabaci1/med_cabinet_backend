exports.seed = function (knex) {
  return knex("flavors")
    .del()
    .then(function () {
      return knex("flavors").insert();
    });
};
