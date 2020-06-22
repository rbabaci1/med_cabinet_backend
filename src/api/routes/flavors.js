const router = require("express").Router();

const controller = require("../controllers/flavorsGet");

router.get("/", controller.getFlavors);
router.get("/:id", controller.getFlavorById);

module.exports = router;
