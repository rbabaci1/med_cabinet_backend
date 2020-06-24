const { cartSchema } = require("../validationSchemas");
const formatError = require("../../helpers/formatError");
const { getBy } = require("../../db/models/global");

module.exports = async (req, res, next) => {
  const result = cartSchema.validate(req.body);

  if (!result.error) {
    const { product_id, user_id } = req.body;

    const user = await getBy("users", { id: user_id });
    const product = await getBy("products", { id: product_id });
    const productExistsInCart = await getBy("users_products", {
      user_id,
      product_id,
    });

    if (!user) {
      res.status(404).json({ message: "The specified user_id is not valid." });
    } else if (!product) {
      res
        .status(404)
        .json({ message: "The specified product_id is not valid." });
    } else if (productExistsInCart) {
      res
        .status(400)
        .json({ message: "The specified product is already in the cart." });
    } else {
      req.product = product;
      next();
    }
  } else {
    res.status(400).json(formatError(result.error));
  }
};
