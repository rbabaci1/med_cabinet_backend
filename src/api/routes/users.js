const router = require("express").Router();

const postController = require("../controllers/usersPost");
const putController = require("../controllers/usersPut");
const deleteController = require("../controllers/usersDelete");
const validateUserCartInfo = require("../middlewares/validateUserCartInfo");
const validateReviewInfo = require("../middlewares/validateReviewInfo");
const { validateUserInfo } = require("../middlewares/validateUserInfo");

router.post("/cart", validateUserCartInfo("POST"), postController.addToCart);

router.put("/:id", validateUserInfo, putController.updateUserInfo);
router.put("/:id/review", validateReviewInfo, putController.updateUserReview);

router.delete(
  "/cart",
  validateUserCartInfo("DELETE"),
  deleteController.removeCartItem
);

router.delete("/review", deleteController.removeReview);

module.exports = router;
