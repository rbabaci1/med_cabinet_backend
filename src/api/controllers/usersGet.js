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

// GET all products of a user
const getUserProducts = async ({ user }, res) => {
  try {
    const products = await Users.getProducts(user.id);

    res.status(200).json(products);
  } catch ({ message }) {
    res.status(500).json({
      message: "The user products can't be retrieved at this moment.",
      reason: message,
    });
  }
};

// GET all details about a user
const getUserById = async ({ user }, res) => {
  res.status(200).json(user);
};

module.exports = { getUsers, getUserById, getUserProducts };
