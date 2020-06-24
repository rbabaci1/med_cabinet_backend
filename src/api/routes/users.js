const router = require("express").Router();

const User = require("../controllers/usersPost");
const validateUserCartInfo = require("../middlewares/validateUserCartInfo");

router.post("/cart", validateUserCartInfo, User.addToCart);

module.exports = router;
