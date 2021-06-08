/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */

function swap(array, x, y) {//交換陣列中的位置
    var temp = array[x];
    array[x] = array[y];
    array[y] = temp;
    return array;
}

var shuffle = function (nums, n) {
    for (var i = 1; i < n; i++) {
        //1st loop 
		//第一跟最後不用換因此從1至(n-1)        
        for (var j = i, k = n; j < n; j++, k++) {
        //繼續交換
            swap(nums, j, k);
        }
    }
    return nums;
};
/*看解答  採用重新打造一個新的陣列
var shuffle = function(nums, n) {
    let result = [];  空陣列
    for(let i = 0; i < n; i++){
        result.push(nums[i]);
        result.push(nums[i+n]);   
    }
    return result;
};
*/