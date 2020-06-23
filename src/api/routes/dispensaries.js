const router = require("express").Router();

const validateId = require("../middlewares/global");
const validateDispensaryInfo = require("../middlewares/validateDispensaryInfo");
const getController = require("../controllers/dispensariesGet");
const postController = require("../controllers/dispensaryPost");

const TABLE_NAME = "dispensaries";

router.get("/", getController.getDispensaries);
router.get("/:id", validateId(TABLE_NAME), getController.getDispensaryById);

router.post("/", validateDispensaryInfo, postController.createDispensary);

module.exports = router;
