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

const getUserById = async (req, res) => {
  try {
    const { user } = req;
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

// GET all products of a user
const getUserProducts = async (req, res) => {
  try {
    const { id } = req.user;
    const products = await User.getProducts(id);
    // const written_reviews = await User.getReviews(params.id);

    res.status(200).json(products);
  } catch ({ message }) {
    res.status(500).json({
      message: "The user products can't be retrieved at this moment.",
      reason: message,
    });
  }
};

const getUserReviews = async (req, res) => {
  try {
    const { id } = req.user;
    const reviews = await User.getReviews(id);

    res.status(200).json(reviews);
  } catch ({ message }) {
    res.status(500).json({
      message: "The user reviews can't be retrieved at this moment.",
      reason: message,
    });
  }
};

module.exports = { getUsers, getUserById, getUserProducts, getUserReviews };
