const bcrypt = require("bcrypt");

const User = require("../../db/models/users");
const now = require("../../utils/getLocalDateTime");

const registerUser = async (req, res) => {
  try {
    const user = { ...req.body, created_at: now() };
    const hash = bcrypt.hashSync(user.password, 10);

    const insertedUser = await User.create({ ...user, password: hash });

    res.status(201).json({ success: true, created: { ...insertedUser } });
  } catch ({ message }) {
    res.status(500).json({
      message: "An error occurred while inserting to the database.",
      reason: message,
    });
  }
};

module.exports = { registerUser };
