exports.up = function (knex) {
  return knex.schema.createTable("products_dispensaries", table => {
    table
      .string("product_name", 64)
      .notNullable()
      .references("strain_name")
      .inTable("products")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .integer("dispensary_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dispensaries")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.primary(["product_name", "dispensary_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("products_dispensaries");
};
