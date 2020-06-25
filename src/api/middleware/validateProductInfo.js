const { productSchema } = require("../validationSchemas");
const formatError = require("../../helpers/formatError");
const { getBy } = require("../../db/models/global");

module.exports = async (req, res, next) => {
  const result = productSchema.validate(req.body);

  if (result.error) {
    res.status(400).json(formatError(result.error));
  } else {
    try {
      const { strain_name, dispensary_id } = req.body;

      const dispensary = await getBy("dispensaries", {
        id: dispensary_id,
      });
      const productExists = await getBy("products", {
        strain_name,
        dispensary_id,
      });

      if (!dispensary) {
        res
          .status(404)
          .json({ message: "The specified dispensary_id is not valid." });
      } else if (productExists) {
        res
          .status(400)
          .json(
            "The specified product already exists under the same dispensary."
          );
      } else {
        next();
      }
    } catch (error) {
      next(error);
    }
  }
};
