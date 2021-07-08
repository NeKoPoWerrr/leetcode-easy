/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    var result = [];
    for(var i = 0; i <= n; i++){
        var count = 0;
        Array.from(i.toString(2)).forEach((bitNumber)=>{
            if(bitNumber == 1){
                count++;
                return count;
            }
        });
        result.push(count);
    }
    return result;
};
