const knex = require("knex");

const dbConfig = require("../knexfile");
const { DB_ENV, addForeignKeys } = require("../config");

dbConfig[DB_ENV].pool = addForeignKeys;

module.exports = knex(dbConfig[DB_ENV]);
