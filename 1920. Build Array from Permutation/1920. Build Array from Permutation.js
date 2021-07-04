/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var buildArray = function(nums) {
    var result = [];
    for(var item of nums){
        result.push(nums[item]);
    }
    return result;
};