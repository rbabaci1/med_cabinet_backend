const { getAll } = require("../../db/models/allRoutes");

const router = require("express").Router();

router.get("/", async (req, res) => {
  const users = await getAll("users");
  res.status(200).json(users);
});

module.exports = router;
