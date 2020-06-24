const router = require("express").Router();

const User = require("../controllers/usersPost");
const validateReviewInfo = require("../middlewares/validateReviewInfo");
const validateUserCartInfo = require("../middlewares/validateUserCartInfo");

router.post("/review", validateReviewInfo, User.createReview);
router.post("/cart", validateUserCartInfo, User.addToCart);

module.exports = router;
