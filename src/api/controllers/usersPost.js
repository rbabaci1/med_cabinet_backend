const User = require("../../db/models/users");

const registerUser = (req, res) => {
  try {
    // add created_at
    res.status(200).json({ message: "made it!" });
  } catch (error) {
    console.error(error);
  }
};

module.exports = { registerUser };
