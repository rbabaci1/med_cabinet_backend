const { remove } = require("../../db/models/global");

const removeCartItem = async (req, res, next) => {
  try {
    const { user_id, product_id } = req.params;

    await remove("users_carts", { user_id, product_id });
    res.status(200).json({ success: true, removedProduct: req.product });
  } catch (error) {
    next(error);
  }
};

const removeReview = async (req, res, next) => {
  try {
    const { product_id, user_id } = req.params;

    await remove("reviews", { user_id, product_id });
    res.status(200).json({ success: true, removedReview: req.review });
  } catch (error) {
    next(error);
  }
};

module.exports = { removeCartItem, removeReview };
