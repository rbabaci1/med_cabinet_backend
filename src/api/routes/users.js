const router = require("express").Router();

const getController = require("../controllers/usersGet");
const postController = require("../controllers/usersPost");
const putController = require("../controllers/usersPut");
const deleteController = require("../controllers/usersDelete");
const isAuth = require("../middleware/isAuth");
const validateUserCartInfo = require("../middleware/validateUserCartInfo");
const validateReviewInfo = require("../middleware/validateReviewInfo");
const { validateUserInfo } = require("../middleware/validateUserInfo");
const validateId = require("../middleware/global");

const TABLE_NAME = "users";

router.get(
  "/auth/:id",
  isAuth,
  validateId(TABLE_NAME),
  getController.getUserById
);
router.get(
  "/auth/:id/cart",
  isAuth,
  validateId(TABLE_NAME),
  getController.getUserCart
);

router.post(
  "/auth/cart",
  isAuth,
  validateUserCartInfo("POST"),
  postController.addToCart
);
router.post(
  "/auth/review",
  isAuth,
  validateReviewInfo("POST"),
  postController.createReview
);

router.put("/auth/:id", isAuth, validateUserInfo, putController.updateUserInfo);
router.put(
  "/auth/:id/review",
  isAuth,
  validateReviewInfo("PUT"),
  putController.updateUserReview
);

router.delete(
  "/auth/review",
  isAuth,
  validateReviewInfo("DELETE"),
  deleteController.removeReview
);
router.delete(
  "/auth/cart",
  isAuth,
  validateUserCartInfo("DELETE"),
  deleteController.removeCartItem
);

module.exports = router;
