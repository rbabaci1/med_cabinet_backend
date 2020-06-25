const router = require("express").Router();

const validateId = require("../middlewares/global");
const validateProductInfo = require("../middlewares/validateProductInfo");
const validateProductRecommendationInfo = require("../middlewares/validateProductRecommendationInfo");
const getController = require("../controllers/productsGet");
const postController = require("../controllers/productsPost");
const isAuth = require("../middlewares/isAuth");
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
