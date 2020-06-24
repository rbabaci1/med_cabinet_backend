const db = require("../dbConfig");

const getAll = tableName => db(tableName);

const getBy = (tableName, filter) => db(tableName).where(filter).first();

const update = async (tableName, changes, id) => {
  await db(tableName).update(changes).where({ id });
  return getBy(tableName, { id });
};

module.exports = { getAll, getBy, update };
