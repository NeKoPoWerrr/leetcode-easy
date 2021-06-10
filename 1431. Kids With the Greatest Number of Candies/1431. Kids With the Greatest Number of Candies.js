/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
 function findmax(array){//找出最大
    var max = 0;
    for(var i = 0;i < array.length;i++){
        if (array[i] > max ){
            max = array[i];
        }
    }
    return max;
}

var kidsWithCandies = function(candies, extraCandies) {
    var candiesmax = findmax(candies);
    var candiesoutput = [];
    for(var i = 0;i < candies.length;i++){//加起來看有沒有大於等於最大值
        candies[i] = candies[i] + extraCandies;
        if(candies[i] >= candiesmax){
            candiesoutput[i] = true;
        }
        else{
            candiesoutput[i] = false;
        }
    }
    return candiesoutput;
};

/*看解答
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
/*
 var kidsWithCandies = function(candies, extraCandies) {
    const max = Math.max(...candies); //直接用方法找最大值(解構)
    for(let i=0; i < candies.length; i++){
        candies[i] = candies[i]+extraCandies >= max; 
    }
    return candies;

    也可以 return(candies.map((candy)=>candy+extraCandies>=max)) //直接用map開陣列回傳boolean
};
*/
