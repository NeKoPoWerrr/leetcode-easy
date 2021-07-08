/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {
    var result = [];
    var temp = [];
    var answer = [];
    for(var i = 0; i < nums.length; i++){
        if(nums[i]%2 === 0){
            result.push(nums[i]);
        }else{
            temp.push(nums[i]);
        }
    }
    for(var i = 0; i < nums.length/2; i++){
        answer.push(result[i],temp[i]);
    }
    return answer;
};

/*
var sortArrayByParityII = function(nums) {
    let result = new Array(nums.length);
    
    let evenIdex = 0;
    let oddIndex = 1;
    
    nums.forEach((element) => {
        if (element % 2 == 0) {
            result[evenIdex] = element;
            evenIdex += 2;
        } else {
            result[oddIndex] = element;
            oddIndex += 2;
        }
    });
    
    return result;
};
*/