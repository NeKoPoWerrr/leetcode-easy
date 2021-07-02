/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    var result = [];
    for(var item of nums){
        if(item %2 != 0){
            result.push(item);
        }else{
            result.splice(0,0, item );
        }
    }
    return result;
};
