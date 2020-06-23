const router = require("express").Router();

const { validateId } = require("../middlewares/global");
const controller = require("../controllers/usersGet");

const TABLE_NAME = "users";

router.get("/:id", validateId(TABLE_NAME), controller.getUserById);

module.exports = router;
