const UpperCaser = function (words) {
  this.words = words
}

UpperCaser.prototype.toUpperCase = function () {
  return this.words.map(string => string.toUpperCase());
};

module.exports = UpperCaser;
