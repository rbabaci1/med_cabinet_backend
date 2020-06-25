const router = require("express").Router();

const validateId = require("../middlewares/global");
const validateDispensaryInfo = require("../middlewares/validateDispensaryInfo");
const isAuth = require("../middlewares/isAuth");
const getController = require("../controllers/dispensariesGet");
const postController = require("../controllers/dispensaryPost");

const TABLE_NAME = "dispensaries";

router.get("/", getController.getDispensaries);
router.get("/:id", validateId(TABLE_NAME), getController.getDispensaryById);

router.post(
  "/auth/",
  isAuth,
  validateDispensaryInfo,
  postController.createDispensary
);

module.exports = router;
