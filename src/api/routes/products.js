const router = require("express").Router();

const controller = require("../controllers/productsGet");

router.get("/", controller.getProducts);

module.exports = router;
