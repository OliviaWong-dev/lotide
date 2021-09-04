const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`💓💓💓Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`💔💔💔Assertion Failed: "${actual}" !== "${expected}"`);
  }
};

const countLetters = function(word) {
  let count = {};
  for (letter of word) {
    if (!count[letter]) {
      count[letter] = 1;
    } else {
      count[letter] = count[letter] + 1;
    }
  }
  return count;
};


assertEqual(countLetters("hello").h, 1);
assertEqual(countLetters("hello").e, 1);
assertEqual(countLetters("hello").l, 2);
assertEqual(countLetters("hello").o, 1);

module.exports = countLetters;

