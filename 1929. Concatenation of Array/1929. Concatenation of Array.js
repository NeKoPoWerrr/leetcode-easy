/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var getConcatenation = function(nums) {
    var ans = []
    ans = [...nums, ...nums]
    return ans
};

