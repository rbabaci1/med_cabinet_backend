exports.up = function (knex) {
  return knex.schema.createTable("dispensaries", table => {
    table.increments();
    table.string("name", 64).notNullable().unique();
    table.string("address", 64).notNullable().unique();
    table.string("city", 64).notNullable();
    table.string("state", 64).notNullable();
    table.string("postal_code", 64).notNullable();
    table.string("phone_number", 64).notNullable();
    table.string("email", 64).notNullable().unique();
    table.string("logo_url", 128).notNullable();
    table.boolean("has_delivery").notNullable();
    table.string("created_at", 64).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("dispensaries");
};
