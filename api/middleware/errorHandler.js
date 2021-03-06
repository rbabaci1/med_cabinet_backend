module.exports = (error, req, res, next) => {
  const code = error.statusCode || 500;

  res.status(code).json({
    success: false,
    statusCode: code,
    type: error.name,
    message: error.message,
    stackTrace: error.stack,
  });
};
