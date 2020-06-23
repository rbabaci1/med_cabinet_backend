const router = require("express").Router();

const validateUserDuplication = require("../middlewares/validateUserDuplication");
const validateUserInfo = require("../middlewares/validateUserInfo");
const controller = require("../controllers/usersPost");

router.post(
  "/",
  validateUserInfo,
  validateUserDuplication,
  controller.registerUser
);

module.exports = router;
