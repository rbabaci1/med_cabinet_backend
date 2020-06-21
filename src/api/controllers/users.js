const { getAll } = require("../../db/models/global");
const { getProducts } = require("../../db/models/user");

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

const getUserProducts = async (req, res) => {
  const { id } = req.params;
  try {
    const userProducts = await getProducts(id);

    res.status(200).json(userProducts);
  } catch ({ message }) {
    res.status(500).json({ reason: message });
  }
};

module.exports = { getUsers, getUserById, getUserProducts };
