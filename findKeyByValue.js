const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💓💓💓Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💔💔💔Assertion Failed: "${actual}" !== "${expected}"`);
  }
};


// loop through object keys
// identify object value for each key
// match key against value
// return the object key for the respective value as string


const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  // note for for loop
  // for (let i = 0; i < keys.length; i++) {
  //   if (object[keys[i]] === value) {
  //     return keys[i]
  for (key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};



const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

module.exports = findKeyByValue;