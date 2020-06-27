const { remove, getBy } = require("../../db/models/global");

const removeCartItem = async (req, res, next) => {
  try {
    const { product_id } = req.body;

    await remove("users_products", { product_id });
    res.status(200).json({ success: true, removedProduct: req.product });
  } catch (error) {
    next(error);
  }
};

const removeReview = async (req, res, next) => {
  try {
    const { product_id, user_id } = req.body;

    const user = await getBy("users", { id: user_id });
    const product = await getBy("products", { id: product_id });
    const review = await getBy("reviews", { user_id, product_id });

    if (!user) {
      res.status(404).json({
        success: false,
        message: "The specified user_id is not valid.",
      });
    } else if (!product) {
      res.status(404).json({
        success: false,
        message: "The specified product_id is not valid.",
      });
    } else if (!review) {
      res.status(404).json({
        success: false,
        message: "The specified review doesn't exists .",
      });
    } else {
      await remove("reviews", { product_id });
      res.status(200).json({ success: true, removedReview: review });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { removeCartItem, removeReview };
