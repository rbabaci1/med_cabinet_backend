const { ADMIN_PASSWORD } = require("../../config");

module.exports = (req, res, next) => {
  try {
    const admin = req.headers ? req.headers.admin : false;

    if (admin) {
      if (admin === ADMIN_PASSWORD) {
        next();
      } else {
        error.statusCode = 401;
        error.message = "Your admin password is not correct!!!";
        next(error);
      }
    } else {
      next({
        success: false,
        statusCode: 401,
        message: "You must be an admin user to create shit!!!",
      });
    }
  } catch (error) {
    next(error);
  }
};
