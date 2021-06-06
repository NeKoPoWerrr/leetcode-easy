/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var runningSum = function(nums) {
    var temp = [];//建立一個空陣列
    temp[0] = nums[0];//使temp第零個與nums同步
    for(var i = 1; i < nums.length ; i++ ){
        temp[i] = temp[i-1] + nums [i];//將temp第零個nums與第一個相加成temp第一個
    }
    return temp;
};


/*看答案
最佳解:運用reduce
const runningSum = nums => {
    nums.reduce((a,c,i,arr) => arr[i] += a)
    return nums
}
*/