const { getAll, getBy } = require("../../db/models/allRoutes");

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
  const { id } = req.params;
  try {
    const user = await getBy("users", { id });
    res.status(200).json({ user });
  } catch ({ message }) {
    res
      .status(500)
      .json({ message: "Could not retrieve user now.", reason: message });
  }
};

module.exports = { getUsers, getUserById };
