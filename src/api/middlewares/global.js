const { getBy } = require("../../db/models/global");

const validateId = tableName => async (req, res, next) => {
  const { id } = req.params;

  try {
    // todo fetch conditionally, depending on tableName
    const user = await getBy(tableName, { id });

    if (user) {
      // todo create conditionally too
      req.user = user;
      next();
    } else {
      res
        .status(401)
        .json({ message: "The user with the specified ID does not exist." });
    }
  } catch ({ message }) {
    res
      .status(500)
      .json({ message: "Could not retrieve the user now.", reason: message });
  }
};

module.exports = { validateId };
