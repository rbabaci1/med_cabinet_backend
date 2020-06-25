module.exports = (businessHours, dispensary_id) => {
  return businessHours.map(day => {
    return { ...day, dispensary_id };
  });
};
