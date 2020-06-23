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

    const insertedUser = await User.create({ ...user, password: hash });
    const token = generateToken(insertedUser);
    const createdUser = removeObjKey(insertedUser, "password");

    res.status(201).json({ success: true, createdUser, token });
  } catch ({ message }) {
    res.status(500).json({
      message: "An error occurred while inserting to the database.",
      reason: message,
    });
  }
};

const loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await getBy("users", { email });

    if (user && bcrypt.compare(password, user.password)) {
      const token = generateToken(user);
      res.status(200).json({
        message: "Welcome to best med cabinet in the world!",
        user,
        token,
      });
    } else {
      res.status(401).json({ message: "Invalid credentials. Try again?" });
    }
  } catch (error) {
    // res.status(500).json({
    //   message: "An error occurred while authenticating the user.",
    //   reason: message,
    // });
    next(error);
  }
};

module.exports = { registerUser, loginUser };
