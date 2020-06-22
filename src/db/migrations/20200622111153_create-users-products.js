exports.up = function (knex) {
  return knex.schema.createTable("users_products", table => {
    table
      .integer("user_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .integer("product_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("products")
      .onDelete("RESTRICT")
      .onUpdate("CASCADE");

    table.string("created_at", 64).notNullable();
    table.string("updated_at", 64).notNullable();

    table.primary(["user_id", "product_id"]);
  });
};
