exports.up = function (knex) {
  return knex.schema.createTable("users", table => {
    table.increments();
    table.string("first_name", 64).notNullable();
    table.string("last_name", 64).notNullable();
    table.string("email", 64).notNullable().unique();
    table.string("username", 64).notNullable().unique();
    table.string("password", 64).notNullable();
    table.date("date_of_birth").notNullable();
    table
      .timestamp("registered_at", { precision: 6 })
      .defaultTO(knex.fn.now(6));
    table.timestamps(true, true);
  });
};

exports.down = function (knex) {
  return knex.dropTableIfExists("users");
};
