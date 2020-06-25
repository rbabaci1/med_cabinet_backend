const router = require("express").Router();

const validateUserDuplicates = require("../middleware/validateUserDuplicates");
const User = require("../middleware/validateUserInfo");
const postController = require("../controllers/usersPost");

router.post(
  "/register",
  User.validateSignup,
  validateUserDuplicates,
  postController.registerUser
);
router.post("/login", User.validateLogin, postController.loginUser);

module.exports = router;
