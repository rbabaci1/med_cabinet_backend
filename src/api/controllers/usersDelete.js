const { update } = require("../../db/models/global");

const removeCartItem = async (req, res, next) => {
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

module.exports = { removeCartItem };
