const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../../config");

module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization;

    if (token) {
      jwt.verify(token, JWT_SECRET, (error, decodedToken) => {
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
        statusCode: 401,
        message: "User token is not included in the headers.",
      });
    }
  } catch (error) {
    next(error);
  }
};
