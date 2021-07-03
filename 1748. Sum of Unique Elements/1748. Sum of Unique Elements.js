/**
 * @param {number[]} nums
 * @return {number}
 */
 var sumOfUnique = function(nums) {
    var repeat = new Set();
    var numsSet = new Set();
    var sum = 0;
    nums.forEach((item)=>{
        if(numsSet.has(item)){
            repeat.add(item)
        }else{
            numsSet.add(item);
        }
    })
    numsSet.forEach((plus)=>{
        sum += plus;
    })
    repeat.forEach((minu)=>{
        sum -= minu;
    })
    return sum;
};
/*
var sumOfUnique = function(nums) {
    let counter = new Map();
    let sum = 0;
    for (let i=0; i<nums.length; i++) {
        let num = nums[i];
        if (!counter.has(num)) {
            counter.set(num, 1);
            sum += num
        }
        else {
            let count = counter.get(num)
            if (count < 2) sum -= num;
            counter.set(num, count+1);
        }
    }
    return sum;
};
*/