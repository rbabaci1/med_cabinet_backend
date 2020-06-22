const User = require("../../db/models/users");

const registerUser = (req, res) => {
  try {
    console.log(req.body);
    res.end();
  } catch (error) {
    console.error(error);
  }
};

module.exports = { registerUser };
