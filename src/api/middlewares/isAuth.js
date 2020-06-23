const jwt = require("jsonwebtoken");

const { JWT_SECRET } = require("../../config");

module.exports = (req, res, next) => {
  try {
    const { authorization } = req.headers;
    const { token } = authorization ? authorization : null;

    if (token) {
      jwt.verify(token, JWT_SECRET, (error, decodedToken) => {
        if (error) {
          next(error);
        } else {
          console.log(decodedToken);
          next();
        }
      });
    }
  } catch (error) {
    next(error);
  }
};
