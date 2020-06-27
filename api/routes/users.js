const router = require("express").Router();

const getController = require("../controllers/usersGet");
const postController = require("../controllers/usersPost");
const putController = require("../controllers/usersPut");
const deleteController = require("../controllers/usersDelete");
const isAuth = require("../middleware/isAuth");
const validateUserCartInfo = require("../middleware/validateUserCartInfo");
const validateReviewInfo = require("../middleware/validateReviewInfo");
const { validateUserUpdateInfo } = require("../middleware/validateUserInfo");
const validateId = require("../middleware/global");

const TABLE_NAME = "users";

router.get("/:id", isAuth, validateId(TABLE_NAME), getController.getUserById);

router.post(
  "/cart",
  isAuth,
  validateUserCartInfo("POST"),
  postController.addToCart
);
router.post(
  "/review",
  isAuth,
  validateReviewInfo("POST"),
  postController.createReview
);

router.put(
  "/:id",
  isAuth,
  validateUserUpdateInfo,
  putController.updateUserInfo
);
router.put(
  "/review/:id",
  isAuth,
  validateReviewInfo("PUT"),
  putController.updateUserReview
);

router.delete(
  "/:user_id/cart/:product_id",
  isAuth,
  validateUserCartInfo("DELETE"),
  deleteController.removeCartItem
);
// todo, pass ids by params
router.delete(
  "/:user_id/review/:product_id",
  isAuth,
  validateReviewInfo("DELETE"),
  deleteController.removeReview
);

module.exports = router;
