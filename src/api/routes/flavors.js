const router = require("express").Router();

const controller = require("../controllers/flavorsGet");

router.get("/", controller.getFlavors);

module.exports = router;
