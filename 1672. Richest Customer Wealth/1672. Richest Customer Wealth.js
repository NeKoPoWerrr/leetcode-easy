/**
 * @param {number[][]} accounts
 * @return {number}
 */
 var maximumWealth = function(accounts) {
    var max = 0;
    var sum = 0; //設兩個變數 max為最大值 sum為計算數字
    for(var i = 0; i < accounts.length;i++){
        //1st loop 
        //array長度
        for(var j = 0; j<accounts[i].length;j++){
            sum = sum + accounts[i][j]; //把accounts[i]中數字都加起來
        }
        if(sum > max){
            max = sum;//如果sum > max將值存進去max
        }
        sum = 0//再讓他歸零去計算數字
    }
    return max;
};

/*看答案  運用reduce
var maximumWealth = function(accounts) {
    return accounts.reduce((acc, val) => {
        const result = val.reduce((acc, val) => acc + val, 0);
        return Math.max(result, acc);
    }, 0)
};
*/