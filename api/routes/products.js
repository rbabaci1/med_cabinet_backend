const router = require("express").Router();

const validateProductRecommendationInfo = require("../middleware/validateProductRecommendationInfo");
const validateId = require("../middleware/global");
const validateProductInfo = require("../middleware/validateProductInfo");
const getController = require("../controllers/productsGet");
const postController = require("../controllers/productsPost");
const isAdmin = require("../middleware/isAdmin");

const TABLE_NAME = "products";

router.get("/", getController.getProducts);
router.get("/:id", validateId(TABLE_NAME), getController.getProductById);

router.post(
  "/create",
  isAdmin,
  validateProductInfo,
  postController.createProduct
);
router.post(
  "/recommendations",
  validateProductRecommendationInfo,
  postController.getRecommendations
);

module.exports = router;
