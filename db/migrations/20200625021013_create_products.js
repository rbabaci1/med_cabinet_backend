exports.up = function (knex) {
  return knex.schema.createTable("products", table => {
    table.increments();
    table.string("strain_name").notNullable();
    table.string("strain_category").notNullable();
    table.string("strain_type").notNullable();
    table.string("flavors").notNullable();
    table.string("effects").notNullable();
    table.integer("avg_thc").notNullable();
    table.integer("avg_cbd").notNullable();
    table.integer("price").notNullable();
    table.string("price_unit").notNullable();
    table.string("description").notNullable();
    table.string("img_url").notNullable();
    table.boolean("is_available").notNullable();
    table.string("created_at").notNullable();
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
