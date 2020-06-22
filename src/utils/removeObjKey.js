const removeObjKey = (obj, keyName) => {
  const keys = Object.keys(obj);
  let newObj = {};

  keys.forEach(key => {
    if (key !== keyName) {
      newObj[key] = obj[key];
    }
  });

  return Object.freeze(newObj);
};

module.exports = removeObjKey;
