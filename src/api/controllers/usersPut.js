const { update } = require("../../db/models/global");
const removeObjKey = require("../../helpers/removeObjKey");

const updateUserInfo = async (req, res, next) => {
  try {
    const { body, params } = req;
    const user = await update("users", body, params.id);
    const updatedUser = removeObjKey(user, "password");

    res.status(200).json({ success: true, updatedUser });
  } catch (error) {
    next(error);
  }
};

module.exports = { updateUserInfo };
