/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLastWord = function(s) {
    let result = []
    let string = ''
    for (var i = 0; i < s.length; i++) {
        if(s[i] !== ' ') {
            string += s[i]
            if (i === s.length - 1) {
                result.push(string)
            }
        } else if (s[i] === ' ' && string !== '') {
            result.push(string)
            string = ''
        }
    }
    return result[result.length - 1].length
};

/*
var lengthOfLastWord = function(s) {
    s=s.trim()
    let arr=s.split(" ")
    return arr[arr.length-1].length
    
};
*/