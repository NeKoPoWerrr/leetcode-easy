/**
 * @param {number[][]} rectangles
 * @return {number}
 */
 var countGoodRectangles = function(rectangles) {
    var result = [];
    var maxResult = 0;
    var count = 0;
    for(var item of rectangles){
       result.push(Math.min(...item));
    }
    maxResult = Math.max(...result);
    for(var item of result){
       if(item == maxResult){
           count ++;
       }
    }
    return count
};
/*
var countGoodRectangles = function(rectangles) {
    let maxLen = 0;
    let maxCount = 0;
    rectangles.forEach(([length,width])=>{
        const curLen = length > width ? width : length;
        if (maxLen === curLen) { maxCount++; }
        else if (maxLen < curLen) { maxLen = curLen; maxCount = 1; }
    });
    return maxCount;
};
*/