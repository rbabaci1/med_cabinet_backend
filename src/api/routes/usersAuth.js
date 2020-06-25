const router = require("express").Router();

const validateUserDuplicates = require("../middlewares/validateUserDuplicates");
const User = require("../middlewares/validateUserInfo");
const postController = require("../controllers/usersPost");

router.post(
  "/register",
  User.validateSignup,
  validateUserDuplicates,
  postController.registerUser
);
router.post("/login", User.validateLogin, postController.loginUser);

module.exports = router;
