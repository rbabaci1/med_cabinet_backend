const bcrypt = require("bcrypt");

const now = require("../../helpers/getLocalDateTime");
const generateToken = require("../../helpers/generateToken.js");
const removeObjKey = require("../../helpers/removeObjKey.js");
const { getBy } = require("../../db/models/global");
const { SALT_ROUNDS } = require("../../config");
const User = require("../../db/models/users");

const registerUser = async (req, res) => {
  try {
    const user = { ...req.body, created_at: now() };
    const hash = bcrypt.hashSync(user.password, parseInt(SALT_ROUNDS));

    const createdUser = await User.create({ ...user, password: hash });
    const token = generateToken(createdUser);

    res.status(201).json({
      success: true,
      createdUser: removeObjKey(createdUser, "password"),
      token,
    });
  } catch (error) {
    next(error);
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await getBy("users", { email });

    if (user && bcrypt.compareSync(password, user.password)) {
      const token = generateToken(user);

      res.status(200).json({
        success: true,
        message: "Welcome to best med-cabinet in the planet!",
        logged_user: removeObjKey(user, "password"),
        token,
      });
    } else {
      res
        .status(401)
        .json({ success: false, message: "Invalid credentials. Try again?" });
    }
  } catch (error) {
    next(error);
  }
};

const addToCart = async (req, res, next) => {
  try {
    const cartItem = { ...req.body, created_at: now(), updated_at: now() };
    await User.addToCart(cartItem);
    res.status(201).json({ success: true, addedProduct: req.product });
  } catch (error) {
    next(error);
  }
};

const createReview = async (req, res, next) => {
  try {
    const review = { ...req.body, created_at: now(), updated_at: now() };

    await User.createReview(review);
    res.status(201).json({ success: true, createdReview: review });
  } catch (error) {
    next(error);
  }
};

module.exports = { registerUser, loginUser, addToCart, createReview };
