const jwt = require("jsonwebtoken");

const { JWT_SECRET, ONE_HOUR } = require("../config");

module.exports = ({ id, created_at }) => {
  const payload = { subject: id, created_at };

  const options = {
    expiresIn: ONE_HOUR,
    audience: "user",
  };

  return jwt.sign(payload, JWT_SECRET, options);
};
