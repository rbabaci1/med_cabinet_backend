const router = require("express").Router();

const postController = require("../controllers/usersPost");
const putController = require("../controllers/usersPut");
const validateUserCartInfo = require("../middlewares/validateUserCartInfo");
const validateReviewInfo = require("../middlewares/validateReviewInfo");
const { validateUserInfo } = require("../middlewares/validateUserInfo");

router.post("/cart", validateUserCartInfo, postController.addToCart);

router.put("/:id", validateUserInfo, putController.updateUserInfo);
router.put("/:id/review", validateReviewInfo, putController.updateUserReview);

module.exports = router;
