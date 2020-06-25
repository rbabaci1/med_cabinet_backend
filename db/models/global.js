const db = require("../dbConfig");

const getAll = tableName => db(tableName);

const getBy = (tableName, filter) => db(tableName).where(filter).first();

const update = async (tableName, changes, filter) => {
  await db(tableName).update(changes).where(filter);
  return getBy(tableName, filter);
};

const remove = async (tableName, filter) => {
  return db(tableName).delete().where(filter);
};

module.exports = { getAll, getBy, update, remove };
