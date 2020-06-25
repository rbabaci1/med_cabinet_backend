const router = require("express").Router();

const validateId = require("../middlewares/global");
const validateProductInfo = require("../middlewares/validateProductInfo");
const validateReviewInfo = require("../middlewares/validateReviewInfo");
const validateProductRecommendationInfo = require("../middlewares/validateProductRecommendationInfo");
const getController = require("../controllers/productsGet");
const postController = require("../controllers/productsPost");
const TABLE_NAME = "products";

router.get("/", getController.getProducts);
router.get("/:id", validateId(TABLE_NAME), getController.getProductById);

router.post("/create", validateProductInfo, postController.createProduct);
router.post(
  "/recommendations",
  validateProductRecommendationInfo,
  postController.getRecommendations
);
router.post("/review", validateReviewInfo("POST"), postController.createReview);

module.exports = router;
