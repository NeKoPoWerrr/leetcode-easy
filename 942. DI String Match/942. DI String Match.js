/**
 * @param {string} s
 * @return {number[]}
 */
 var diStringMatch = function(s) {
    var answer = [];
    var end = s.length;
    var start = 0
    for(var i = 0; i < s.length ; i++){
        switch(s[i]){
            case 'I': answer.push(start); start++; break;
            case 'D': answer.push(end); end --; break;
        }
    }
    answer.push(start);
    return answer;
};

