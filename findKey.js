const findKey = function (object, callback) {
  let result = "";
  let keys = Object.keys(object);
  if (keys.length === 0) {
    return undefined;
  } else {
    for (key of keys) {
      if (callback(object[key])) {
        result = key;
        break;
      }
    }
    return result;
  }
};

module.exports = findKey;
