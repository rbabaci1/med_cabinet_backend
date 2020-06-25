const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  PORT: process.env.PORT || 5000,
  DB_ENV: process.env.DB_ENV || "development",
  SALT_ROUNDS: process.env.SALT_ROUNDS || 8,
  JWT_SECRET: process.env.JWT_SECRET || "hello there 2020@26",
  ONE_HOUR: 60 * 60,
  pgConnection: process.env.DATABASE_URL,
};
