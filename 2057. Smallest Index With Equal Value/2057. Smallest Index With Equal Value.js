/**
 * @param {number[]} nums
 * @return {number}
 */
 var smallestEqual = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        const remainder = i % 10
        if (nums[i] === remainder) {
            return i
        } else if (i === nums.length - 1) {
            return -1
        }
    }
};

