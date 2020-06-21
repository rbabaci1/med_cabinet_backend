const db = require("../dbConfig");

const getAll = tableName => db(tableName);

module.exports = { getAll };
