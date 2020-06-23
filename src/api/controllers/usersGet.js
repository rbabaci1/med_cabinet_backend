const Users = require("../../db/models/users");

const TABLE_NAME = "users";

// GET all available users
const getUsers = async (req, res) => {
  try {
    const users = await Users.get(TABLE_NAME);
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
    const products = await Users.getProducts(user.id);
    const reviews = await Users.getReviews(user.id);
    const { id, firstName, lastName, email, created_at } = user;

    res
      .status(200)
      .json({ id, firstName, lastName, email, created_at, products, reviews });
  } catch ({ message }) {
    res.status(500).json({
      message: "The user details can't be retrieved at this moment.",
      reason: message,
    });
  }
};

module.exports = { getUsers, getUserById };
