const { getBy } = require("../../db/models/global");

module.exports = async (req, res, next) => {
  const { email } = req.body;
  const user = await getBy("users", { email });

  if (!user) {
    next();
  } else {
    res.status(409).json({
      success: false,
      error: "This email is already registered. Try a different one?",
    });
  }
};
