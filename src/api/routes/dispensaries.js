const router = require("express").Router();

const controller = require("../controllers/dispensariesGet");
const { validateId } = require("../middlewares/global");

const TABLE_NAME = "dispensaries";

router.get("/", controller.getDispensaries);
router.get("/:id", validateId(TABLE_NAME), controller.getDispensaryFullInfo);

module.exports = router;
