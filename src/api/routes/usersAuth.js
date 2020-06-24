const router = require("express").Router();

const validateUserDuplicates = require("../middlewares/validateUserDuplicates");
const isAuth = require("../middlewares/isAuth");
const validateId = require("../middlewares/global");
const User = require("../middlewares/validateUserInfo");
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
  validateUserDuplicates,
  postController.registerUser
);
router.post("/login", User.validateLogin, postController.loginUser);

module.exports = router;
