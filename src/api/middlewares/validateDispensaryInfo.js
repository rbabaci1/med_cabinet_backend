const { dispensarySchema } = require("../validationSchemas");

module.exports = (req, res, next) => {
  const result = dispensarySchema.validate(req.body);

  if (!result.error) {
    next();
  } else {
    res.status(400).json({ error: result.error });
  }
};
