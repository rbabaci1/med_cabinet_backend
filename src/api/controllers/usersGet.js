const Users = require("../../db/models/users");

// GET all details about a user
const getUserById = async ({ user }, res, next) => {
  try {
    const cart = await Users.getProducts(user.id);
    const reviews = await Users.getReviews(user.id);
    const { id, firstName, lastName, email, created_at } = user;

    res
      .status(200)
      .json({ id, firstName, lastName, email, created_at, cart, reviews });
  } catch (error) {
    next(error);
  }
};

// GET User's cart products
const getUserCart = async ({ user }, res, next) => {
  try {
    const cart = await Users.getProducts(user.id);

    res.status(200).json({ user, cart });
  } catch (error) {
    next(error);
  }
};

module.exports = { getUserById, getUserCart };
