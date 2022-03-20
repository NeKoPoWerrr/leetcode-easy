/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] >= target) {
            return i
        } else if (i === nums.length - 1) {
            return nums.length
        }
    }
};

/*
function search_Insert(nums,target,l,r){
    if(r>=l){
        let mid=Math.floor((l + r)/2)
        if(nums[mid]==target){
            return mid
        }
    }
}
*/