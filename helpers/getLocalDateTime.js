module.exports = () => {
  let timeZoneOffset = new Date().getTimezoneOffset();
  let now = new Date(new Date() - timeZoneOffset * 60 * 1000).toISOString();

  return now.replace(/T/, " ").replace(/\..+/, "");
};
