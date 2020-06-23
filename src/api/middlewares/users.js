const { userSchema } = require("../validationSchemas");

const validateUserInfo = (req, res, next) => {
  const result = userSchema.validate(req.body);

  if (!result) {
    next();
  } else {
    res.status(400).json({ error: result.error });
  }
};

module.exports = validateUserInfo;
