const User = require("../../db/models/users");

const TABLE_NAME = "users";

// GET all available users
const getUsers = async (req, res) => {
  try {
    const users = await User.getAll(TABLE_NAME);
    res.status(200).json(users);
  } catch ({ message }) {
    res.status(500).json({
      message: "The users list can't be retrieved at this moment",
      reason: message,
    });
  }
};
// GET all details about a user
const getUserById = async ({ user }, res) => {
  try {
    const products = await User.getProducts(user.id);
    const reviews = await User.getReviews(user.id);

    res.status(200).json({ ...user, products, reviews });
  } catch ({ message }) {
    res.status(500).json({
      message: "The user details can't be retrieved at this moment.",
      reason: message,
    });
  }
};

module.exports = { getUsers, getUserById };
