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


// let helloOriginal = "hello"
// // let dataStructure = the key is the letter; value is array of positions
// // build a basic structure with the letters of hello and empty arrays
// let helloStepOne = { h: [], e: [], l: [], o: [] }
// // iterate over each letter of the original word and then give it to specific array
// let helloResult = { h: [0], e: [1], l: [2, 3], o: [4] }

const letterPositions = function(sentence) {
  let result = {};
  for (let i = 0; i < sentence.length; i++) {
    result[sentence[i]] = [];
  }
  for (let i = 0; i < sentence.length; i++) {
    result[sentence[i]].push(i);
  }
  return result;
};


console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").h, [0]);
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("hello").o, [4]);


module.exports = letterPositions;