/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    var result = [];
    for(var i = left ; i <= right; i++){
        var stwich = false
        //如果10的倍數就不執行
        if(i % 10 !== 0){
            //檢查條件 拆成 "2","2"去檢查
            var temp = i.toString().split('');
            for(var j = 0; j < temp.length; j++){
                //一有一個不是就break
                if(i % temp[j] != 0){
                    stwich = false;
                    break;
                }else{
                    stwich = true;
                }
            }
        }
        if(stwich){
            result.push(i)
        }
    }
    return result;
};