const bcrypt = require("bcrypt");

const now = require("../../helpers/getLocalDateTime");
const generateToken = require("../../helpers/generateToken.js");
const { SALT_ROUNDS } = require("../../config");
const User = require("../../db/models/users");

const registerUser = async (req, res) => {
  try {
    const user = { ...req.body, created_at: now() };
    const hash = bcrypt.hashSync(user.password, parseInt(SALT_ROUNDS));

    const createdUser = await User.create({ ...user, password: hash });
    const token = generateToken(createdUser);

    res.status(201).json({ success: true, createdUser, token });
  } catch ({ message }) {
    res.status(500).json({
      message: "An error occurred while inserting to the database.",
      reason: message,
    });
  }
};

module.exports = { registerUser };
