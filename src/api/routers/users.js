const router = require("express").Router();

const {
  getUsers,
  getUserById,
  getUserProducts,
} = require("../controllers/users");
const { validateId } = require("../middlewares/global");

router.get("/", getUsers);
router.get("/:id", validateId("users"), getUserById);
router.get("/:id/products", validateId("users"), getUserProducts);

module.exports = router;
