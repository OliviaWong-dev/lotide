const takeUntil = function (array, callback) {
  let result = [];
  for (arr of array) {
    if (callback(arr)) {
      break;
    } else {
      result.push(arr);
    }
  }
  return result;
};

module.exports = takeUntil;
