/**
 * @param {string} sentence
 * @return {boolean}
 */

//丟進set看有沒有26個字
 var checkIfPangram = function(sentence) {
    var checkSet = new Set();
    for(var i = 0; i < sentence.length; i++){
        checkSet.add(sentence[i])
    }
    return checkSet.size == 26;
};