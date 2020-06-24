const { reviewSchema } = require("../validationSchemas");
const formatError = require("../../helpers/formatError");
const { getBy } = require("../../db/models/global");

module.exports = async (req, res, next) => {
  const result = reviewSchema.validate(req.body);

  if (!result.error) {
    const user = await getBy("users", { id: req.body.user_id });
    const product = await getBy("products", { id: req.body.product_id });

    if (!user) {
      res.status(401).json({ message: "The specified user_id is not valid." });
    } else if (!product) {
      res
        .status(401)
        .json({ message: "The specified product_id is not valid." });
    } else {
      next();
    }
  } else {
    res.status(400).json(formatError(result.error));
  }
};
