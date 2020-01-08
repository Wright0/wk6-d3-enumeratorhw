const IsogramFinder = function (word) {
  this.word = word
}

IsogramFinder.prototype.isIsogram = function () {
  const wordSplitUpAndUpperCased = this.word.toUpperCase().split("");
  const duplicatesRemoved = [...new Set(wordSplitUpAndUpperCased)];
  return wordSplitUpAndUpperCased.length === duplicatesRemoved.length
};

module.exports = IsogramFinder;
