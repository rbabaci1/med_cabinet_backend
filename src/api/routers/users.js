const router = require("express").Router();

const userService = require("../services/user");

router.get("/", userService.getUsers);

module.exports = router;
