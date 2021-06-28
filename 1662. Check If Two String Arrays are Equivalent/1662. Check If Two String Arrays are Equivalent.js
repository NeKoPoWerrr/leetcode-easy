/**
 * @param {string[]} word1
 * @param {string[]} word2
 * @return {boolean}
 */
 var arrayStringsAreEqual = function(word1, word2) {
    var string1 = '';
    var string2 = '';
    for(var item1 of word1){
        string1 += item1;
    }
    for(var item2 of word2){
        string2 += item2;
    }
    if(string1.length != string2.length){
        return false;
    }else{
       return string1 === string2;
    }
};

/*
var arrayStringsAreEqual = function(word1 = ['ab', 'c'], word2 = ['a', 'bc']) {
  word1 = word1.join('');
  word2 = word2.join('');
  return word1===word2
};
*/