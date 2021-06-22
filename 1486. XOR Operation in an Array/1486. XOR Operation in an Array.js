/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
 var xorOperation = function(n, start) {
    var answer;
   for(var i = 0; i < n; i++){
       answer ^= start+2*i;
   }
   return answer
};

