const { dispensarySchema } = require("../validationSchemas");

const validateDispensaryInfo = (req, res, next) => {
  const result = dispensarySchema.validate(req.body);

  if (!result.error) {
    next();
  } else {
    res.status(400).json({ error: result.error });
  }
};

module.exports = validateDispensaryInfo;
