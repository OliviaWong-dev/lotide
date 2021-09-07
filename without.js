const without = function (source, itemsToRemove) {
  let keep = [];
  for (let i = 0; i < source.length; i++) {
    if (itemsToRemove.indexOf(source[i]) === -1) {
      keep.push(source[i]);
    }
  }
  return keep;
};

module.exports = without;
