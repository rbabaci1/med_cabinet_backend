const router = require("express").Router();

const controller = require("../controllers/usersGet");
const { validateId } = require("../middlewares/global");
const TABLE_NAME = "users";

router.get("/", controller.getUsers);
router.get("/:id", validateId(TABLE_NAME), controller.getUserById);

module.exports = router;
