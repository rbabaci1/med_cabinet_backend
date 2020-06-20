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
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.primary(["user_id", "product_id"]);
  });
};

exports.down = function (knex) {};
