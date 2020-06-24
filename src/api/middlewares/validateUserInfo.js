const { signupSchema, loginSchema } = require("../validationSchemas");
const formatError = require("../../helpers/formatError");

const validateSignup = (req, res, next) => {
  const result = signupSchema.validate(req.body);

  if (!result.error) {
    next();
  } else {
    res.status(400).json(formatError(result.error));
  }
};

const validateLogin = (req, res, next) => {
  const result = loginSchema.validate(req.body);

  if (!result.error) {
    next();
  } else {
    res.status(400).json(formatError(result.error));
  }
};

module.exports = {
  validateSignup,
  validateLogin,
  validateUserInfo: validateSignup,
};
