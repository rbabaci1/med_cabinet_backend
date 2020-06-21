const { getUsers, getUserById } = require("../controllers/users");

const router = require("express").Router();

router.get("/", getUsers);
router.get("/:id", getUserById);

module.exports = router;
