/**
 * @param {string[]} sentences
 * @return {number}
 */
 var mostWordsFound = function(sentences) {
    let res = 0
    for(var i = 0; i < sentences.length; i++) {
        const length = sentences[i].split(' ').length
        if (length > res) res = length
    }
    return res
};

/*
var mostWordsFound = function(sentences) {
    const totalWord = sentences.map(sentence => sentence.split(' ').length);
    return Math.max(...totalWord);
};
*/