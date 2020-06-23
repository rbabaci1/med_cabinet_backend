const router = require("express").Router();

const getController = require("../controllers/usersGet");
const postController = require("../controllers/usersPost");
const { validateId } = require("../middlewares/global");
const validateUserInfo = require("../middlewares/validateUserInfo");
const validateDispensaryInfo = require("../middlewares/validateDispensaryInfo");

const TABLE_NAME = "users";

router.get("/", getController.getUsers);
router.get("/:id", validateId(TABLE_NAME), getController.getUserById);

router.post("/", validateUserInfo, postController.registerUser);

module.exports = router;
