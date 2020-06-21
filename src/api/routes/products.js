const router = require("express").Router();

const { getAll } = require("../../db/models/global");

router.get("/", getAll);

module.exports = router;
