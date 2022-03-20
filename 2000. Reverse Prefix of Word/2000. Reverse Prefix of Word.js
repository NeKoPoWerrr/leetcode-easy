/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
 var reversePrefix = function(word, ch) {
    const index = word.indexOf(ch)
    if (index === -1) return word
    var revWord = word.slice(0, index + 1)
    var norWord = word.slice(index + 1)
    return revWord.split('').reverse().join('') + norWord
};