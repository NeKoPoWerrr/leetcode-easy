/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var sortByBits = function(arr) {
    var result;
    var answer = [];
    var temp = [];
    var checkMap = [];
    for(var item of arr){
        var count = 0;
        item.toString(2).split('').forEach((items)=>{
            if(items == 1) count ++;
        })
        checkMap.push([item,count]);
    }
    result = checkMap.sort((a,b)=>(a[1]-b[1] || a[0]-b[0]))
    for(var i = 0; i < result.length  ; i++){
       answer.push(result[i][0])
    }
   return answer;
};