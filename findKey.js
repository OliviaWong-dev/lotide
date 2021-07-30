
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💓💓💓Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💔💔💔Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const findKey = function(object, callback) {
  let result = ''
  let keys = Object.keys(object)
  for (key of keys) {
      if(callback(object[key])) {
        result = key;
        break;
      }
    }
    return result
  };



assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma") 

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3), "Akaleri") 

assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 1), "Blue Hill") 

