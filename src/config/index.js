const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT,
  DB_ENV: process.env.DB_ENV,
  SALT_ROUNDS: process.env.SALT_ROUNDS,
};
