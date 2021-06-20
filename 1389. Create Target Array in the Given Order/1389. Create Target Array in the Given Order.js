/**
 * @param {number[]} nums
 * @param {number[]} index
 * @return {number[]}
 */

//02431
var createTargetArray = function(nums, index) {
    var temp = [];
     var answer = new Array(nums.length).fill(0)
     //跑index，如果遇到該位置本來就存在，則把位置之後的index都+1(往後移一格)並存入temp[]
     for(var i = 0;i < index.length; i++){
         if(temp.includes(index[i])){
             for(var j = 0 ; j < i; j++){
                 if(temp[j] >= index[i]){
                     temp[j]++;
                 }
             }
         }
      temp.push(index[i]);
     }

     //再將nums照temp順序去排
     for(var i = 0;i < nums.length; i++){
         answer[temp[i]] = nums[i]
     }
     return answer;
 };



/*
 var createTargetArray = function(nums, index) {
    var res = [];
    for (var i = 0; i < nums.length; i++) {
        var n = nums[i];
        var newIndex = index[i];
        res = [
            ...res.slice(0, newIndex),
            n,
            ...res.slice(newIndex),
        ];
    }
    return res;
};

var createTargetArray = function(nums, index) {
    let output = [];
    for (let i = 0; i < nums.length; i++) {
        output.splice(index[i], 0, nums[i]);
    }
    return output;
};

如果遇到重複如 [0,1,1,0]將陣列拆成 第一步[0,1],[1] 第二步 [0] [0,1,2]
*/