const { dispensarySchema } = require("../validationSchemas");
const formatError = require("../../helpers/formatError");
const { getBy } = require("../../db/models/global");

module.exports = async (req, res, next) => {
  const result = dispensarySchema.validate(req.body);

  if (result.error) {
    res.status(400).json(formatError(result.error));
  } else {
    try {
      const { name } = req.body;
      const dispensary = await getBy("dispensaries", { name });

      if (dispensary) {
        res.status(409).json({
          success: false,
          message: "This dispensary email is already registered.",
        });
      } else {
        next();
      }
    } catch (error) {
      next(error);
    }
  }
};
