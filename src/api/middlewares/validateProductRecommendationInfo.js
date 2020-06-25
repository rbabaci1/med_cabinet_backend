const { productRecommendationSchema } = require("../validationSchemas");
const formatError = require("../../helpers/formatError");

module.exports = async (req, res, next) => {
  const result = productRecommendationSchema.validate(req.body);

  if (result.error) {
    res.status(400).json(formatError(result.error));
  } else {
    next();
  }
};
