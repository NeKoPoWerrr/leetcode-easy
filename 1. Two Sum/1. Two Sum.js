/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var targetPos = [];
    for(var i = 0; i < nums.length-1; i++){
        var minus = target - nums[i];
        targetPos[0] = i;
        for(var j = i + 1; j < nums.length; j++){
             if(minus == nums[j]){
                targetPos[1] = j;    
             }
        }
       if(targetPos.length > 1) break;
    }
    return targetPos;
};

/*
const twoSum = (nums, target) => {
    
    for(let i = 0; i<nums.length-1; i++){
        for(let j = i+1; j<nums.length; j++){
            if(nums[i]+nums[j]==target) {return [i, j]}
        }
    }  
};
*/