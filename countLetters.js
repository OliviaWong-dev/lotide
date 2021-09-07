const assertEqual = require("./assertEqual");

const countLetters = function (word) {
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

module.exports = countLetters;
