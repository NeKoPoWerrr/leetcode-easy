/**
 * @param {string[]} strs
 * @return {number}
 */
 var minDeletionSize = function(strs) {
    var res = [];
    var answer = 0;
    for (let i = 0; i < strs[0].length; i++) {
        res[i] = strs.map((str) => str[i].charCodeAt()-97)
    }
    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res[i].length -1 ; j++) {
            if(res[i][j] > res[i][j+1]){
                answer ++;
                break;
            }
        }
    }
    return answer;
};