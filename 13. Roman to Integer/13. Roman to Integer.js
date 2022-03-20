/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    const toInteger = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    var res = 0
    for (var i = 0; i < s.length; i++) {
        switch (s[i]) {
            case 'I':
                if (s[i+1] === 'V') {
                    res += 4;
                    i++;
                } else if (s[i+1] === 'X') {
                    res += 9;
                    i++;
                } else {
                    res += toInteger[s[i]]
                }
                break;
            case 'X':
                if (s[i+1] === 'L') {
                    res += 40;
                    i++;
                } else if (s[i+1] === 'C') {
                    res += 90;
                    i++;
                } else {
                    res += toInteger[s[i]]
                }
                break;
            case 'C':
                if (s[i+1] === 'D') {
                    res += 400;
                    i++;
                } else if (s[i+1] === 'M') {
                    res += 900;
                    i++;
                } else {
                    res += toInteger[s[i]]
                }
                break;
            default:
                res += toInteger[s[i]]
        }
    }
    return res
};

