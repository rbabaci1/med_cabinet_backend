const { getUsers, getUserById } = require("../controllers/users");
const { validateId } = require("../middlewares/users");

const router = require("express").Router();

router.get("/", getUsers);
router.get("/:id", validateId, getUserById);

module.exports = router;
