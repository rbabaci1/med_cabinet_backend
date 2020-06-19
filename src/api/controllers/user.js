const userService = require("../services/user");

module.exports = async function getUser(req, res, next) {
  // validate request prams, queries if needed(maybe using express validator)
  try {
    const users = await userService.getUsers();

    return res.status(200).json(users);
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
};
