exports.up = function (knex) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("email").notNullable().unique();
    table.string("password").notNullable();
    table.string("created_at").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
