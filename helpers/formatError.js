module.exports = error => {
  const received = error._original;
  const { message } = error.details[0];

  return {
    error: "Request body is not valid.",
    received_body: received,
    message,
  };
};
