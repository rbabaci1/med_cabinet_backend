exports.up = function (knex) {
  return knex.schema
    .createTable("flavors", table => {
      table.increments();
      table.string("flavor", 64).notNullable();
    })
    .createTable("effects", table => {
      table.increments();
      table.string("effect", 64).notNullable();
      table.string("effect_type", 64).notNullable();
    })
    .createTable("products_flavors", table => {
      table
        .integer("product_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("products")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      table
        .integer("flavor_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("flavors")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      table.primary(["product_id", "flavor_id"]);
    })
    .createTable("products_effects", table => {
      table
        .integer("product_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("products")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      table
        .integer("effect_id")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("effects")
        .onDelete("CASCADE")
        .onUpdate("CASCADE");

      table.primary(["product_id", "effect_id"]);
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("products_effects")
    .dropTableIfExists("products_flavors")
    .dropTableIfExists("effects")
    .dropTableIfExists("flavors");
};
