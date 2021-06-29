/**
 * @param {number[]} gain
 * @return {number}
 */
 var largestAltitude = function(gain) {
    var max = 0;
    var temp = 0;
    var reuslt = [];
    for(var item of gain){
        temp += item;
        if(max < temp){
            max = temp;
        }
    }
    return max;
};

/*
var largestAltitude = function(gain) {    
    return Math.max(...gain.reduce((cv, v, i) => [...cv, (cv[i] + v)], [0]));
*/