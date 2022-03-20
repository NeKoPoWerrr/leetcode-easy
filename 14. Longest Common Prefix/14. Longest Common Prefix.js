/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {
    var s = strs[0]
    let check = []
    let checkInside = ''
    let res = ''
    if (strs.length === 1) return strs[0]
    for (let i = 0; i < s.length; i++) {
        checkInside += s[i]
        check.push(checkInside)
    }
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < check.length; j++) {
            if (strs[i].indexOf(check[j]) !== 0) {
                check[j] = ''
            }
        }
    }
    for (let i = 0; i < check.length; i++) {
        if (check[i] !== '' && res.length < check[i].length) {
            res = check[i]
        }
    }
    return res
};

/*
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    
    for(let word of strs) {
        while(word.indexOf(prefix) != 0) {
            prefix = prefix.substring(0, prefix.length - 1);
        }
    }
          
    return prefix;
};
*/