const { getUsers } = require("../controllers/users");

const router = require("express").Router();

router.get("/", getUsers);

module.exports = router;
