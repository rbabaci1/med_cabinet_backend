module.exports = error => {
  const received_body = error._original;
  const { message } = error.details[0];

  return {
    success: false,
    error: "Request body is not valid.",
    received_body,
    message,
  };
};
