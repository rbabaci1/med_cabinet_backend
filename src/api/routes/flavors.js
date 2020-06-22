const router = require("express").Router();

const controller = require("../controllers/flavorsGet");
const { validateId } = require("../middlewares/global");

const TABLE_NAME = "flavors";

router.get("/", controller.getFlavors);
router.get("/:id", validateId(TABLE_NAME), controller.getFlavorById);

module.exports = router;
