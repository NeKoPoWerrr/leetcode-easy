/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var sumBase = function(n, k) {
    var answer = 0;
    var baseK = n.toString(k).split('');
    baseK.forEach((item)=>{
        answer += Number(item);
    });
    return answer;
};