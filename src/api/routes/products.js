const router = require("express").Router();

const validateId = require("../middlewares/global");
const controller = require("../controllers/productsGet");
const TABLE_NAME = "products";

router.get("/", controller.getProducts);
router.get("/:id", validateId(TABLE_NAME), controller.getProductById);

module.exports = router;
