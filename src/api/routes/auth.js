const router = require("express").Router();

const validateUserDuplication = require("../middlewares/validateUserDuplication");
const isAuth = require("../middlewares/isAuth");
const User = require("../middlewares/validateUserInfo");
const { validateId } = require("../middlewares/global");
const getController = require("../controllers/usersGet");
const postController = require("../controllers/usersPost");

const TABLE_NAME = "users";

router.get(
  "/users/:id",
  isAuth,
  validateId(TABLE_NAME),
  getController.getUserById
);

router.post(
  "/register",
  User.validateSignup,
  validateUserDuplication,
  postController.registerUser
);
router.post("/login", User.validateLogin, postController.loginUser);

module.exports = router;
