const { getBy } = require("../../db/models/global");
const getEntityName = require("../../helpers/getEntityName");

const validateId = tableName => async (req, res, next) => {
  const entity = getEntityName(tableName);

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
  } catch (error) {
    next(error);
  }
};

module.exports = validateId;
