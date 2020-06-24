const { update } = require("../../db/models/global");

const updateUserInfo = async (req, res, next) => {
  try {
    const { body, params } = req;
    const updatedUser = await update("users", body, params.id);

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

module.exports = { updateUserInfo };
