const { userSchema } = require("../validationSchemas");
const formatError = require("../../utils/formatError");

const validateUserInfo = (req, res, next) => {
  const result = userSchema.validate(req.body);

  if (!result.error) {
    next();
  } else {
    res.status(400).json(error);
  }
};

module.exports = validateUserInfo;
