const router = require("express").Router();

const controller = require("../controllers/productsGet");
const { validateId } = require("../middlewares/global");
const TABLE_NAME = "products";

router.get("/", controller.getProducts);
router.get("/:id", validateId(TABLE_NAME), controller.getProductById);
router.get(
  "/:id/provider",
  validateId(TABLE_NAME),
  controller.getProductProvider
);
router.get(
  "/:id/flavors_effects",
  validateId(TABLE_NAME),
  controller.getProductFlavorsEffects
);

module.exports = router;
