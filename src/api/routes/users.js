const router = require("express").Router();

const UserPost = require("../controllers/usersPost");
const UserPut = require("../controllers/usersPut");
const validateUserCartInfo = require("../middlewares/validateUserCartInfo");
const { validateUserInfo } = require("../middlewares/validateUserInfo");

router.post("/cart", validateUserCartInfo, UserPost.addToCart);

router.put("/:id", validateUserInfo, UserPut.updateUserInfo);

module.exports = router;
