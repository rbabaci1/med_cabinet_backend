const User = require("../../db/models/users");
const validateUser = require("../middlewares/users");

const registerUser = (req, res) => {
  try {
    const result = validateUser(req.body);

    if (result.error) {
      res.status(400).json({ error: result.error });
    } else {
      res.status(200).json({ message: "made it!" });
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = { registerUser };
