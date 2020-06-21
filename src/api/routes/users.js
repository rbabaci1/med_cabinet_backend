const router = require("express").Router();

const controller = require("../controllers/usersGet");
const { validateId } = require("../middlewares/global");

router.get("/", controller.getUsers);
router.get("/:id/fullInfo", validateId("users"), controller.getUserFullInfo);
// router.get("/:id/products", validateId("users"), controller.getUserProducts);
// router.get("/:id/reviews", validateId("users"), controller.getUserReviews);

module.exports = router;
