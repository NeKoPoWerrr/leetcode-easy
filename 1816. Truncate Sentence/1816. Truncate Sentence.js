/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
 var truncateSentence = function(s, k) {
    var separateS = s.split(' ');
    return separateS.slice(0,k).join(' ');
};