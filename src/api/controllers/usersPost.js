const bcrypt = require("bcrypt");

const now = require("../../helpers/getLocalDateTime");
const { SALT_ROUNDS } = require("../../config");
const User = require("../../db/models/users");

const registerUser = async (req, res) => {
  try {
    const user = { ...req.body, created_at: now() };
    const hash = bcrypt.hashSync(user.password, parseInt(SALT_ROUNDS));

    const createdUser = await User.create({ ...user, password: hash });
    // generate a token if Front End redirecting to home page after signup

    res.status(201).json({ success: true, created: { ...createdUser } });
  } catch ({ message }) {
    res.status(500).json({
      message: "An error occurred while inserting to the database.",
      reason: message,
    });
  }
};

module.exports = { registerUser };
