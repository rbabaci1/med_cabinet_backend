module.exports = (error, req, res, next) => {
  res.status(500).json({
    statusCode: error.statusCode || 500,
    type: error.name,
    message: error.message,
    stack_trace: error.stack,
  });
};
