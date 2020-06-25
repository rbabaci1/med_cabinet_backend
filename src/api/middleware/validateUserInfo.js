const {
  signupSchema,
  loginSchema,
  userUpdateSchema,
} = require("../validationSchemas");
const formatError = require("../../helpers/formatError");
const { getBy } = require("../../db/models/global");

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

const validateUserInfo = async (req, res, next) => {
  const { id } = req.params;
  const result = userUpdateSchema.validate(req.body);

  if (result.error) {
    res.status(400).json(formatError(result.error));
  } else {
    try {
      const user = await getBy("users", { id });

      if (!user) {
        res.status(404).json({ message: "The specified user doesn't exist." });
      } else {
        next();
      }
    } catch (error) {
      next(error);
    }
  }
};

module.exports = { validateSignup, validateLogin, validateUserInfo };
