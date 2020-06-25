exports.up = function (knex) {
  return knex.schema.createTable("dispensaries", table => {
    table.increments();
    table.string("name").notNullable().unique();
    table.string("address").notNullable().unique();
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.string("postal_code").notNullable();
    table.string("phone_number").notNullable();
    table.string("email").notNullable().unique();
    table.string("logo_url").notNullable();
    table.boolean("has_delivery").notNullable();
    table.string("created_at").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("dispensaries");
};
