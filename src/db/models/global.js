const db = require("../dbConfig");

const getAll = tableName => db(tableName);

const getBy = (tableName, filter) => db(tableName).where(filter).first();

module.exports = { getAll, getBy };
