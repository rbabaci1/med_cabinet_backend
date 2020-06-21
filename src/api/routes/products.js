const router = require("express").Router();

const controller = require("../controllers/productsGet");

router.get("/", controller.getProducts);
router.get("/:id", controller.getProductById);

module.exports = router;
