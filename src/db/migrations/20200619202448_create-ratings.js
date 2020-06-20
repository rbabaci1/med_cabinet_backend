exports.up = function (knex) {
  return knex.schema.createTable("ratings", table => {
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
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.integer("rate").notNullable();
    table.string("description").notNullable();
    table.string("created_at", 64).notNullable();
    table.string("updated_at", 64).notNullable();

    table.primary(["user_id", "product_id"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("ratings");
};
