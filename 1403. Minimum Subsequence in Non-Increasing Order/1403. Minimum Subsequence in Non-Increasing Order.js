/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var minSubsequence = function(nums) {
    nums.sort((a,b)=>b - a);
    var sum = 0;
    var total = nums.reduce((acc,current)=>{
        return acc + current
    })
    for(var i = 0;i < nums.length; i++){
        sum += nums[i];
        if(sum > total - sum){
            return nums.slice(0, i + 1)
        }
    }
};

