/**
 * @param {number[]} nums
 * @return {number}
 */
 var minOperations = function(nums) {
    let res = 0
    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i+1] <= nums[i]) {
            res += nums[i] - nums[i+1] + 1
            nums[i+1] += nums[i] - nums[i+1] + 1
        }
    }
    return res
};

