const router = require("express").Router();

const controller = require("../controllers/productsGet");
const { validateId } = require("../middlewares/global");

router.get("/", controller.getProducts);
router.get("/:id", validateId("products"), controller.getProductById);
router.get(
  "/:id/fullInfo",
  validateId("products"),
  controller.getProductFullInfo
);

module.exports = router;
