const usersController = require("../controllers/users");

const router = require("express").Router();

router.get("/", usersController.get);

module.exports = router;
