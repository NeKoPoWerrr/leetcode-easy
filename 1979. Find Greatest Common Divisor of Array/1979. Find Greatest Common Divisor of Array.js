/**
 * @param {number[]} nums
 * @return {number}
 */
 var findGCD = function(nums) {
    let big = nums[0]
    let small = nums[0]
    let check
    for (const number of nums) {
        if (number < small) {
            small = number
        } else if (number > big) {
            big = number
        }
    }
    for (let i = 1; i <= small; i++) {
        if (big % i === 0 && small % i === 0) {
            check = i
        }
    }
    return check
};
/*
 var findGCD = function(nums) {
    let res = 0
    let min = Math.min(...nums)
    let max = Math.max(...nums)
    const b = (z, x) => {
        if (!x) {
            return z
        }
        return b(x, z % x)
    }
    res += b(min, max)
    return res   
};
*/