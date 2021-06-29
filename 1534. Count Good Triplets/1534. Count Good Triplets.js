/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
 var countGoodTriplets = function(arr, a, b, c) {
    var temp = [];
    var check = [];
    var answer = 0;
    for(var i = 0; i < arr.length - 2; i++){
       temp.push(arr[i]);
       for(var j = i + 1; j < arr.length - 1; j++) {          
         if(Math.abs(arr[i] - arr[j]) <= a) {
            temp.push(arr[j]);
            for(var k = j + 1 ;k < arr.length; k++){
                if(Math.abs(arr[i] - arr[k]) <= c && Math.abs(arr[j] - arr[k]) <= b){                  
                   temp.push(arr[k]);
                   check.push([...temp]);
                   answer++;
                   temp.pop();
                }
            }
            temp.pop();
         }        
       }
        temp = [];
     }
    return answer;
};
