exports.up = function (knex) {
  return knex.schema.createTable("products", table => {
    table.increments();
    table.string("strain_name", 64).notNullable();
    table.string("strain_category", 64).notNullable();
    table.string("strain_type", 64).notNullable();
    table.decimal("avg_thc", null).notNullable();
    table.decimal("avg_cbd", null).notNullable();
    table.decimal("price", null).notNullable();
    table.string("price_unit", 64).notNullable();
    table.string("description").notNullable();
    table.string("img_url", 128).notNullable();
    table.boolean("is_available").notNullable();
    table.string("created_at", 64).notNullable();
    table
      .integer("dispensary_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dispensaries")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("products");
};
