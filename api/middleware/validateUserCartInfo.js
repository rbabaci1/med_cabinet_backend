const { cartSchema } = require("../validationSchemas");
const formatError = require("../../helpers/formatError");
const { getBy } = require("../../db/models/global");

module.exports = method => {
  return async (req, res, next) => {
    const data = method === "DELETE" ? req.params : req.body;
    const { product_id, user_id } = data;
    const result = cartSchema.validate(data);

    if (result.error) {
      res.status(400).json(formatError(result.error));
    } else {
      try {
        const user = await getBy("users", { id: user_id });
        const product = await getBy("products", { id: product_id });
        const productExists = await getBy("users_carts", {
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
        } else if (productExists && method === "POST") {
          res.status(409).json({
            success: false,
            message: "The specified product is already in the cart.",
          });
        } else if (!productExists && method === "DELETE") {
          res.status(404).json({
            success: false,
            message: "The specified product doesn't exists in the cart.",
          });
        } else {
          req.product = product;
          next();
        }
      } catch (error) {
        next(error);
      }
    }
  };
};
