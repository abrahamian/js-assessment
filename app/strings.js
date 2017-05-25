exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
  	return str.split("").reduce(
  		function(memo, val, i) {
  			return str.substring(i-amount, i) == val.repeat(amount) ? memo : memo.concat(val);
  		}, "");
  },

  wordWrap: function(str, cols) {

    // avoid having to type these string literals more than once.
    var space = " ";
    var lineBreak = "\n";

    var words = str.split(space); // create an array of words from the original string.

    var firstWord = words[0];   // first word (regardless of length) begins the new string
    var remainingWords = words.slice(1, words.length); // we will iterate through the rest of the words to construct the new string.

    return remainingWords.reduce(function(string, word) {

      var lastLineLength = string.substring(string.lastIndexOf(lineBreak), string.length).length;
      // if the last line can fit the new word, prepend the word with a space.
      // otherwise prepend the word with a line break.

      var prependedCharacter = ((lastLineLength + word.length) > cols) ? lineBreak : space;

      return string.concat(prependedCharacter + word);
    }, firstWord);

  },

  reverseString: function(str) {
    return str.split("").reduce(function(string, character) {
      return character.concat(string);
    }, "");
  }

};