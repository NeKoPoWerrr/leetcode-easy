/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    const stringX = String(x)
    const length = stringX.length
    if (x < 0) return false
    if (length === 1) return true
    for (let i = 0; i < stringX.length; i++) {
        let left
        let right
        left = stringX[i]
        right = stringX[length - i - 1]
        if (length % 2 === 0) {
            if (left === right && i === length - i) return true
            if (left !== right) return false
        } else {
            if (left !== right && i !== length - i - 1) return false
            if (i === length - i - 1) return true
        }
    }
};

/*
var isPalindrome = function(x) {
    const str = x.toString()
    for (let i=0; i<Math.ceil(str.length/2); i++){
        if (str[i]!==str[str.length-1-i]){
            return false
        }
    }
    return true
}
*/