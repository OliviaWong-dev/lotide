const eqArrays = function(actualArr, expectedArr) {
  let result;
  for (actualList of actualArr) {
    for (expectedList of expectedArr) {
      if (actualList === expectedList) {
        result = true;
      } else {
        result = false;
      }
    }
  }
  return result;
};


module.exports = eqArrays;

