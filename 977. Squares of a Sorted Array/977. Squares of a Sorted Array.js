/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortedSquares = function(nums) {
    var square = nums.map((item)=>{
        return item*item;
    });
    return square.sort((a,b)=> a - b);
}

/*
var sortedSquares = function(nums) {
    const squared = new Array(nums.length);
    
    let left = 0;
    let right = nums.length - 1;
    
    for(let i = nums.length - 1; i >= 0; i--) {
        const leftSquare = nums[left] * nums[left];
        const rightSquare = nums[right] * nums[right];
        
        if (leftSquare > rightSquare) {
            squared[i] = leftSquare;
            left++;
        } else {
            squared[i] = rightSquare;
            right--;
        }
    }
    
    
    return squared;
};
*/