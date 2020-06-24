const { reviewSchema } = require("../validationSchemas");
const formatError = require("../../helpers/formatError");

module.exports = (req, res, next) => {
  const result = reviewSchema.validate(req.body);

  if (!result.error) {
    next();
  } else {
    res.status(400).json(formatError(result.error));
  }
};
