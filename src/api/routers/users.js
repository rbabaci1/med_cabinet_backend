const router = require("express").Router();

const { getUsers, getUserById } = require("../controllers/users");
const { validateId } = require("../middlewares/global");

router.get("/", getUsers);
router.get("/:id", validateId("users"), getUserById);

module.exports = router;
