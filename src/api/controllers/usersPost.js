const User = require("../../db/models/users");
const now = require("../../utils/getLocalDateTime");

const registerUser = async (req, res) => {
  try {
    const newUser = { ...req.body, created_at: now() };
    const insertedUser = await User.create(newUser);

    res.status(200).json({ success: true, created: { ...insertedUser } });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { registerUser };
