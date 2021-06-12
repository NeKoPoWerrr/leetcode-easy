/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    //全部比對
    var answer = 0;
    var temp = 0;
    var answerlist = [];
    for (var i = 0; i < nums.length; i++) {
        for (var j = 0; j < nums.length; j++) {
            temp = nums[i];
            if (temp > nums[j]) {
                answer++
            }
        }
        answerlist.push(answer)
        answer = 0
    }
    return answerlist;
};

/*看解答
 var smallerNumbersThanCurrent = function(nums) {
    //先造一個陣列排列
      const numsCopy = [...nums].sort((a, b) => a - b)
    //他們的索引直就是比多少個元素大
    return nums.map((num) => numsCopy.indexOf(num))
};
*/