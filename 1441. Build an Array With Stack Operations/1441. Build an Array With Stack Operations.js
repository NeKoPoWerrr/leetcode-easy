/**
 * @param {number[]} target
 * @param {number} n
 * @return {string[]}
 */
 var buildArray = function(target, n) {
    var push = 'Push';
    var pop = 'Pop';
    var result = [];
    for(var i = 1; i <= target[target.length-1] ; i ++){
        if(target.includes(i)){
            result.push(push);
        }else if(!target.includes(i)){
            result.push(push)
            result.push(pop);
        }
    }
    return result;
};