/**
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
    var count = nums.length/2;
    var result = new Map();
    var answer;
    for(var i = 0; i < nums.length; i++){
        if(result.has(nums[i])){
            result.set(nums[i],result.get(nums[i])+1)
        }else{
            result.set(nums[i],1)
        }
    }
    result.forEach((value, key)=>{
        if(value == count){
            answer = key;
        }
    }) 
    return answer;
};