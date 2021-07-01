/**
 * @param {number} n
 * @return {number[]}
 */
 var sumZero = function(n) {
    var result = [];
    //push一半的數字
    for(var i = 1; i <= Math.floor(n/2) ; i++){
        result.push(i);
        result.push(-i);
    }
    //如果是偶數要多push一個0
    if(n%2 != 0){
        result.push(0)
    }
   return result ;
};
