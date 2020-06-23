const { getBy } = require("../../db/models/global");

const validateUserDuplication = async (req, res, next) => {
  const { email } = req.body;
  const item = await getBy("users", { email });

  if (!item) {
    next();
  } else {
    res
      .status(400)
      .json({
        success: false,
        error: "This email address is already being used.",
      });
  }
};

module.exports = validateUserDuplication;
