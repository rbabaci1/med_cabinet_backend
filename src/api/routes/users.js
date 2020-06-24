const router = require("express").Router();

const User = require("../controllers/usersPost");
const validateReviewInfo = require("../middlewares/validateReviewInfo");

router.post("/review", validateReviewInfo, User.createReview);
router.post("/cart", validateUserProductIds, User.addToCart);

module.exports = router;
