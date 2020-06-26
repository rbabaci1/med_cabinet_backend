const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../../config");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token) {
      jwt.verify(token, JWT_SECRET, error => {
        if (error) {
          error.statusCode = 401;
          error.message = "Invalid credentials. Try again?";
          next(error);
        } else {
          next();
        }
      });
    } else {
      next({
        success: false,
        statusCode: 401,
        message: "User token must be included in the headers.",
      });
    }
  } catch (error) {
    next(error);
  }
};
