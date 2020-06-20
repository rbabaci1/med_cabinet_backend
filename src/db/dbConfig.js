const knex = require("knex");

const config = require("../knexfile");
const { DB_ENV } = require("../config");

module.exports = knex(config([DB_ENV]));
