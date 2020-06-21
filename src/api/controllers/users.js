const { getAll } = require("../../db/models/global");
const { getProducts } = require("../../db/models/user");

const getUsers = async (req, res) => {
  try {
    const users = await getAll("users");
    res.status(200).json(users);
  } catch ({ message }) {
    res.status(500).json({
      message: "The users list can't be retrieved at this moment",
      reason: message,
    });
  }
};

const getUserById = async (req, res) => {
  res.status(200).json(req.user);
};

const getUserProducts = async (req, res) => {
  try {
    const { user, params } = req;
    const products = await getProducts(params.id);

    res
      .status(200)
      .json(
        products.length
          ? { user_name: `${user.first_name} ${user.last_name}`, products }
          : { message: "The specified user has 0 products." }
      );
  } catch ({ message }) {
    res.status(500).json({
      message: "The user products can't be retrieved at this moment.",
      reason: message,
    });
  }
};

module.exports = { getUsers, getUserById, getUserProducts };
