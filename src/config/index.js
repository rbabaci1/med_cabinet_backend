const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  DB_ENV: process.env.DB_ENV,
  addForeignKeys: {
    afterCreate: function (conn, done) {
      conn.run("PRAGMA foreign_keys = ON", done);
    },
  },
};
