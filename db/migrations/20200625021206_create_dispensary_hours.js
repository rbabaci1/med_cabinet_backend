exports.up = function (knex) {
  return knex.schema.createTable("dispensaries_hours", table => {
    table
      .integer("dispensary_id")
      .unsigned()
      .notNullable()
      .references("id")
      .inTable("dispensaries")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.integer("day_of_week").notNullable();
    table.string("open_time").notNullable();
    table.string("close_time").notNullable();

    table.primary(["dispensary_id", "day_of_week"]);
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("dispensaries_hours");
};
