const { reviewSchema, deleteReviewSchema } = require("../validationSchemas");
const formatError = require("../../helpers/formatError");
const { getBy } = require("../../db/models/global");

module.exports = method => {
  return async (req, res, next) => {
    const result =
      method === "DELETE"
        ? deleteReviewSchema.validate(req.body)
        : reviewSchema.validate(req.body);

    if (result.error) {
      res.status(400).json(formatError(result.error));
    } else {
      try {
        const { product_id, user_id } = req.body;
        const user = await getBy("users", { id: user_id });
        const product = await getBy("products", { id: product_id });
        const reviewExists = await getBy("ratings", {
          user_id,
          product_id,
        });

        if (!user) {
          res
            .status(404)
            .json({ message: "The specified user doesn't exist." });
        } else if (!product) {
          res
            .status(404)
            .json({ message: "The specified product doesn't exist." });
        } else if (reviewExists && method === "POST") {
          res
            .status(400)
            .json({ message: "The specified review already exists." });
        } else if (!reviewExists && method === "DELETE") {
          res.status(404).json({
            message: "The specified review doesn't exists.",
          });
        } else if (!reviewExists && method === "PUT") {
          res.status(404).json({
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
