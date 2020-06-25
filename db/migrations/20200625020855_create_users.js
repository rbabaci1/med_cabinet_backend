exports.up = function (knex) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table.string("firstName", 64).notNullable();
    table.string("lastName", 64).notNullable();
    table.string("email", 64).notNullable().unique();
    table.string("password", 64).notNullable();
    table.string("created_at", 64).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("users");
};
