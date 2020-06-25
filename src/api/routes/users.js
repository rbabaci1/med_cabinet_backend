const router = require("express").Router();

const getController = require("../controllers/usersGet");
const postController = require("../controllers/usersPost");
const putController = require("../controllers/usersPut");
const deleteController = require("../controllers/usersDelete");
const isAuth = require("../middlewares/isAuth");
const validateUserCartInfo = require("../middlewares/validateUserCartInfo");
const validateReviewInfo = require("../middlewares/validateReviewInfo");
const { validateUserInfo } = require("../middlewares/validateUserInfo");
const validateId = require("../middlewares/global");

const TABLE_NAME = "users";

router.get(
  "/auth/:id",
  isAuth,
  validateId(TABLE_NAME),
  getController.getUserById
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
