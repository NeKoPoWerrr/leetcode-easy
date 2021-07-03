/**
 * @param {number[]} prices
 * @return {number[]}
 */
 var finalPrices = function(prices) {
    var result = [];
    var temp;
    for(var i = 0 ; i < prices.length -1; i++){
        for(var j = i+1 ; j < prices.length ; j++){
            if(prices[i] >= prices[j]){
                result.push(prices[i] - prices[j]);
                break;
            }else if( j == prices.length -1){
                result.push(prices[i]);
            }
       }
    }
    result.push(prices[prices.length -1]);
    return result;
};
