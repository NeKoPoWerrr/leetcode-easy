/**
 * @param {string[]} operations
 * @return {number}
 */
 var finalValueAfterOperations = function(operations) {
    var ans = 0
    for(var x of operations) {
        if (x.indexOf('+') !== -1) {
            ans += 1
        } else {
            ans -= 1
        }
    }
    return ans
};

