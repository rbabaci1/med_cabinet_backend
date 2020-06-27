const router = require("express").Router();

const validateId = require("../middleware/global");
const validateDispensaryInfo = require("../middleware/validateDispensaryInfo");
const isAdmin = require("../middleware/isAdmin");
const getController = require("../controllers/dispensariesGet");
const postController = require("../controllers/dispensaryPost");

const TABLE_NAME = "dispensaries";

router.get("/", getController.getDispensaries);
router.get("/:id", validateId(TABLE_NAME), getController.getDispensaryById);

router.post(
  "/",
  isAdmin,
  validateDispensaryInfo,
  postController.createDispensary
);

module.exports = router;
