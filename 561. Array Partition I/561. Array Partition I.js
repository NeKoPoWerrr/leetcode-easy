/**
 * @param {number[]} nums
 * @return {number}
 */
 var arrayPairSum = function(nums) {
    var sum = 0;
    nums.sort((a,b)=>a-b);
    for(var i = 0; i < nums.length -1; i+=2){
        var j = i+1;
        sum += Math.min(nums[i],nums[j]);
    }
    return sum;
}