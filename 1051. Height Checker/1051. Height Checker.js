/**
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    var count = 0;
    var expected = heights.concat();
    heights.sort((a, b)=> a - b);
    for(var i = 0; i < heights.length; i++){
        if(heights[i] != expected[i]){
            count ++;
        }
    }
        return count;
};