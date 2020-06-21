const { getAll } = require("../../db/models/allRoutes");

const router = require("express").Router();

router.get("/", async (req, res) => {
  try {
    const users = await getAll("users");
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
