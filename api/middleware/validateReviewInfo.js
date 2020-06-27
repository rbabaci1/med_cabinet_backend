const { reviewSchema, deleteReviewSchema } = require("../validationSchemas");
const formatError = require("../../helpers/formatError");
const { getBy } = require("../../db/models/global");

module.exports = method => {
  return async (req, res, next) => {
    const { product_id, user_id } = method === "POST" ? req.body : req.params;

    const result =
      method === "DELETE"
        ? deleteReviewSchema.validate(req.params)
        : reviewSchema.validate(req.body);

    if (result.error) {
      res.status(400).json(formatError(result.error));
    } else {
      try {
        const user = await getBy("users", { id: user_id });
        const product = await getBy("products", { id: product_id });
        const reviewExists = await getBy("reviews", {
          user_id,
          product_id,
        });

        if (!user) {
          res.status(404).json({
            success: false,
            message: "The specified user doesn't exist.",
          });
        } else if (!product) {
          res.status(404).json({
            success: false,
            message: "The specified product doesn't exist.",
          });
        } else if (reviewExists && method === "POST") {
          res.status(409).json({
            success: false,
            message: "This review already exists for the specified user.",
          });
        } else if (!reviewExists && method !== "POST") {
          res.status(404).json({
            success: false,
            message: "The specified review doesn't exists.",
          });
        } else {
          next();
        }
      } catch (error) {
        next(error);
      }
    }
  };
};
