const User = require("../../db/models/users");
const now = require("../../utils/getLocalDateTime");

const registerUser = (req, res) => {
  try {
    // add created_at

    res.status(200).json(req.body);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { registerUser };
