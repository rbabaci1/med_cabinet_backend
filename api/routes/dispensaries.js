const router = require("express").Router();

const validateId = require("../middleware/global");
const validateDispensaryInfo = require("../middleware/validateDispensaryInfo");
const isAuth = require("../middleware/isAuth");
const getController = require("../controllers/dispensariesGet");
const postController = require("../controllers/dispensaryPost");

const TABLE_NAME = "dispensaries";

router.get("/", getController.getDispensaries);
router.get("/:id", validateId(TABLE_NAME), getController.getDispensaryById);

router.post(
  "/",
  isAuth,
  validateDispensaryInfo,
  postController.createDispensary
);

module.exports = router;