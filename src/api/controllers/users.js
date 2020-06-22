const { getAll } = require("../../db/models/global");

const getUsers = async (req, res) => {
  try {
    const users = await getAll("users");
    res.status(200).json(users);
  } catch ({ message }) {
    res
      .status(500)
      .json({ message: "Could not retrieve users now.", reason: message });
  }
};

const getUserById = async (req, res) => {
  res.status(200).json(req.user);
};

module.exports = { getUsers, getUserById };
