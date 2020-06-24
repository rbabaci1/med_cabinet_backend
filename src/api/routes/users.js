const router = require("express").Router();

const User = require("../controllers/usersPost");
const validateReviewInfo = require("../middlewares/validateReviewInfo");
const validateUserProductIds = require("../middlewares/validateUserProductIds");

router.post("/review", validateReviewInfo, User.createReview);
router.post("/cart", validateUserProductIds, User.addToCart);

module.exports = router;
