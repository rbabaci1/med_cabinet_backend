const { remove } = require("../../db/models/global");

const removeCartItem = async (req, res, next) => {
  try {
    const { product_id } = req.body;

    await remove("users_products", { product_id });
    res.status(200).json({ message: "success", removedProduct: req.product });
  } catch (error) {
    next(error);
  }
};

module.exports = { removeCartItem };
