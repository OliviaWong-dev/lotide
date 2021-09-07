const findKey = function (object, callback) {
  let result = "";
  let keys = Object.keys(object);
  for (key of keys) {
    if (callback(object[key])) {
      result = key;
      break;
    }
  }
  return result;
};

module.exports = findKey;
