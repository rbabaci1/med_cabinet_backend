const db = require("../dbConfig");

const getAll = tableName => db(tableName);

const getBy = (tableName, filter) => db(tableName).where(filter).first();

const update = (tableName, changes, id) => {
  return db(tableName).where({ id }).update(changes);
};

module.exports = { getAll, getBy, update };
