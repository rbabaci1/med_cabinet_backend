const { update, getBy } = require("../../db/models/global");
const removeObjKey = require("../../helpers/removeObjKey");
const now = require("../../helpers/getLocalDateTime");

const updateUserInfo = async (req, res, next) => {
  try {
    const changes = req.body;
    const { id } = req.params;

    const user = await update("users", changes, { id });
    const updatedUser = removeObjKey(user, "password");

    res.status(200).json({ success: true, updatedUser });
  } catch (error) {
    next(error);
  }
};

const updateUserReview = async (req, res, next) => {
  try {
    const changes = req.body;
    const { user_id, product_id } = changes;
    const review = await getBy("reviews", { user_id, product_id });

    if (!review) {
      res.status(404).json({ message: "The specified review doesn't exist." });
    } else {
      const newReview = { ...review, ...changes, updated_at: now() };

      const updatedReview = await update("reviews", newReview, { user_id });
      res.status(200).json({ success: true, updatedReview });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { updateUserInfo, updateUserReview };
