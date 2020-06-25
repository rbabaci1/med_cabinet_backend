const knex = require("knex");

const dbConfig = require("../knexfile");
const { DB_ENV } = require("../config");

module.exports = knex(dbConfig[DB_ENV]);
