const { route } = require("./usersAuth");

const router = require("express").Router();

const User = require("../controllers/usersPost");

router.post("/review", User.createReview);

module.exports = router;
