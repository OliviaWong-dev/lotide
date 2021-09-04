
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const eqArrays = function(actualArr, expectedArr) {
  if (actualArr.length !== expectedArr.length) {
    return false;
  }
  for (let i = 0; i < actualArr.length; i++) {
    if (actualArr[i] !== expectedArr[i]) {
      return false;
    }
  }
  return true;
};


const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`💓💓💓Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💔💔💔Assertion Failed: "${actual}" !== "${expected}"`);
  }
};


const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), ["g", "c", "t", "m", "t"]);
assertArraysEqual(map(words, word => "hello " + word), ["hello ground","hello control","hello to","hello major","hello tom"]);
assertArraysEqual(map(words, word => word.toUpperCase()), ["GROUND","CONTROL","TO","MAJOR","TOM"]);
assertArraysEqual(map(words, word => word.length), [6,7,2,5,3]);


module.exports = map;