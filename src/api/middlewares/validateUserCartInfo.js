const { cartSchema } = require("../validationSchemas");
const formatError = require("../../helpers/formatError");
const { getBy } = require("../../db/models/global");

module.exports = method => {
  return async (req, res, next) => {
    const result = cartSchema.validate(req.body);

    if (result.error) {
      res.status(400).json(formatError(result.error));
    } else {
      const { product_id, user_id } = req.body;
      let user, product, productExistsInCart;

      try {
        user = await getBy("users", { id: user_id });
        product = await getBy("products", { id: product_id });
        productExistsInCart = await getBy("users_products", {
          user_id,
          product_id,
        });
      } catch (error) {
        next(error);
        return;
      }

      if (!user) {
        res
          .status(404)
          .json({ message: "The specified user_id is not valid." });
      } else if (!product) {
        res
          .status(404)
          .json({ message: "The specified product_id is not valid." });
      } else if (productExistsInCart && method === "POST") {
        res
          .status(400)
          .json({ message: "The specified product is already in the cart." });
      } else if (!productExistsInCart && method === "DELETE") {
        res.status(404).json({
          message: "The specified product doesn't exists in the cart.",
        });
      } else {
        req.product = product;
        next();
      }
    }
  };
};
