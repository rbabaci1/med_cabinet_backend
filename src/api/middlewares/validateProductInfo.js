const { productSchema } = require("../validationSchemas");
const formatError = require("../../helpers/formatError");

module.exports = (req, res, next) => {
  const result = productSchema.validate(req.body);

  if (!result.error) {
    next();
  } else {
    res.status(400).json(formatError(result.error));
  }
};
