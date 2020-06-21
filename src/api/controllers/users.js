const { getAll } = require("../../db/models/allRoutes");

const get = async (req, res, next) => {
  try {
    const users = await getAll("users");
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
  }
};

module.exports = { get };
