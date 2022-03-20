/**
 * @param {string} s
 * @return {string}
 */
 var freqAlphabets = function(s) {
    let res = ''
    for (var i = 0; i < s.length; i++) {
        if (s[i+2] !== '#') {
            res += String.fromCharCode(parseInt(s[i]) + 96)
        } else {
            res += String.fromCharCode(parseInt(s[i] + s[i+1]) + 96)
            i = i+2
        }
    }
    return res
};

