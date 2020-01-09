const PangramFinder = function (phrase) {
  this.phrase = phrase;
  this.alphabet = 'qwertyuiopasdfghjklzxcvbnm'.split('');
}

PangramFinder.prototype.isPangram = function () {
  const phraseMadeLowerCase = this.phrase.toLowerCase();
  return this.alphabet.every( letter => phraseMadeLowerCase.includes(letter) );
};
module.exports = PangramFinder;
