/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
 var mergeAlternately = function(word1, word2) {
    var answer = [];
    for(var i = 0; i < Math.max(word1.length,word2.length); i++){
        if(word1[i] !== undefined && word2[i] !== undefined ){
            answer.push(word1[i]);
            answer.push(word2[i]);
        }else if(word1[i] === undefined){
            answer.push(word2[i]);
        }else{
            answer.push(word1[i]);
        }
    }
    return answer.join('');
};
/*
var mergeAlternately = function (word1, word2) {
  let splitWord1 = [...word1];
  let splitWord2 = [...word2];
  let biggestLength = Math.max(splitWord1.length, splitWord2.length);
  let result = [];
  for (let i = 0; i < biggestLength; i++) {
    result.push(splitWord1[i]);
    result.push(splitWord2[i]);
  }
  return result.join("");
};
*/