const { getAll } = require("../../db/models/allRoutes");

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

module.exports = { getUsers };
