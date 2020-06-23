const router = require("express").Router();

const validateUserDuplication = require("../middlewares/validateUserDuplication");
const validateUserInfo = require("../middlewares/validateUserInfo");
const { validateId } = require("../middlewares/global");
const getController = require("../controllers/usersGet");
const postController = require("../controllers/usersPost");

const TABLE_NAME = "users";

router.get("/users/:id", validateId(TABLE_NAME), getController.getUserById);

router.post(
  "/register",
  validateUserInfo,
  validateUserDuplication,
  postController.registerUser
);
router.post("/login", validateUserInfo, postController.loginUser);

module.exports = router;
