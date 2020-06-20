exports.up = function (knex) {
  return knex.schema.createTable("dispensaries_hours", table => {
    table
      .integer("dispensary_id")
      .unsigned()
      .unique()
      .notNullable()
      .references("id")
      .inTable("dispensaries")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table.integer("day_of_week").notNullable();
    table.string("open_time", 64).notNullable();
    table.string("close_time", 64).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("dispensaries_hours");
};
