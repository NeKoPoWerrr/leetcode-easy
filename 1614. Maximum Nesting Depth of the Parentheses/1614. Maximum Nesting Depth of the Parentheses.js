/**
 * @param {string} s
 * @return {number}
 */
 var maxDepth = function(s) {
    var sum = 0;
    var max = 0;
    //遇到 ( 就+1 代表會有一對
    for(var item of s){
        if(item == '('){
            sum++;
    //遇到 ) 就-1 代表配對完成了
        }else if(item == ')'){
            sum--;   
        }if(max < sum){
            max = sum;
        }
    }
    return max;
};

