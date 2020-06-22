const router = require("express").Router();

const controller = require("../controllers/effectsGet");
const { validateId } = require("../middlewares/global");

const TABLE_NAME = "effects";

router.get("/", controller.getEffects);
router.get("/:id", validateId(TABLE_NAME), controller.getEffectById);

module.exports = router;
