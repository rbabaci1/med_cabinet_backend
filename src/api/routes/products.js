const router = require("express").Router();

const validateId = require("../middleware/global");
const validateProductInfo = require("../middleware/validateProductInfo");
const validateProductRecommendationInfo = require("../middleware/validateProductRecommendationInfo");
const getController = require("../controllers/productsGet");
const postController = require("../controllers/productsPost");
const isAuth = require("../middleware/isAuth");
const TABLE_NAME = "products";

router.get("/", getController.getProducts);
router.get("/:id", validateId(TABLE_NAME), getController.getProductById);

router.post(
  "/auth/create",
  isAuth,
  validateProductInfo,
  postController.createProduct
);
router.post(
  "/recommendations",
  validateProductRecommendationInfo,
  postController.getRecommendations
);

module.exports = router;
