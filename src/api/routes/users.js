const router = require("express").Router();

const controller = require("../controllers/usersGet");
const { validateId } = require("../middlewares/global");
const TABLE_NAME = "users";

router.get("/", controller.getUsers);
router.get("/:id", validateId(TABLE_NAME), controller.getUserById);
router.get("/:id/fullInfo", validateId(TABLE_NAME), controller.getUserFullInfo);
// router.get("/:id/products", validateId("users"), controller.getUserProducts);
// router.get("/:id/reviews", validateId("users"), controller.getUserReviews);

module.exports = router;
