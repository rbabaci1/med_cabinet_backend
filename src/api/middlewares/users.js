const { getBy } = require("../../db/models/allRoutes");

const validateId = async (req, res, next) => {
  const { id } = req.params;

  try {
    const user = await getBy("users", { id });

    if (user) {
      req.user = user;
      next();
    } else {
      res
        .status(401)
        .json({ message: "The user with the specified ID does not exists." });
    }
  } catch ({ message }) {
    res
      .status(500)
      .json({ message: "Could not retrieve the user now.", reason: message });
  }
};
