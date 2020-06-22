const { getBy } = require("../../db/models/global");

const validateId = tableName => async (req, res, next) => {
  const entity =
    tableName === "users"
      ? "user"
      : tableName === "products"
      ? "product"
      : "flavors"
      ? "flavor"
      : "";

  try {
    const { id } = req.params;
    const item = await getBy(tableName, { id });

    if (item) {
      req[entity] = item;
      next();
    } else {
      res.status(401).json({
        message: `The ${entity} with the specified ID does not exist.`,
      });
    }
  } catch ({ message }) {
    res.status(500).json({
      message: `Could not retrieve the ${entity} now.`,
      reason: message,
    });
  }
};

module.exports = { validateId };
