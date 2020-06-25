const { productSchema } = require("../validationSchemas");
const formatError = require("../../helpers/formatError");
const { getBy } = require("../../db/models/global");

module.exports = async (req, res, next) => {
  const result = productSchema.validate(req.body);

  if (!result.error) {
    const dispensary = await getBy("dispensaries", {
      id: req.body.dispensary_id,
    });

    if (!dispensary) {
      res
        .status(404)
        .json({ message: "The specified dispensary_id is not valid." });
    } else {
      next();
    }
  } else {
    res.status(400).json(formatError(result.error));
  }
};
