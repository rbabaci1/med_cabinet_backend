module.exports = error => {
  const received = error._original;
  const { message } = error.details[0];

  return { received_body: received, message };
};
