/**
 * @param {number} num
 * @return {boolean}
 */
 var isSameAfterReversals = function(num) {
    return String(num).length === String(parseInt(String(num).split('').reverse().join(''))).length
};

