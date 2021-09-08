const assertEqual = require("./assertEqual");

const findKey = function (object, callback) {
  let result = "";
  let keys = Object.keys(object);
  for (key of keys) {
    if (callback(object[key])) {
      return (result = key);
    }
  }
};

module.exports = findKey;
