const { getAll } = require("../../db/models/global");
const User = require("../../db/models/user");

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

const getUserById = (req, res) => {
  res.status(200).json(req.user);
};

const getUserFullInfo = async (req, res) => {
  try {
    const { user, params } = req;
    const products = await User.getProducts(params.id);
    const reviews = await User.getReviews(params.id);

    res.status(200).json({ ...user, products, reviews });
  } catch ({ message }) {
    res.status(500).json({
      message: "The user details can't be retrieved at this moment.",
      reason: message,
    });
  }
};

module.exports = { getUsers, getUserById, getUserFullInfo };
