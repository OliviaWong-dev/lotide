const findKeyByValue = function (object, value) {
  const keys = Object.keys(object);
  for (key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;
