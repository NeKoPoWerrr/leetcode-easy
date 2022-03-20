/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
 var kthDistinct = function(arr, k) {
    var temp = new Set()
    var check = new Set()
    for (var i = 0; i < arr.length; i++) {
        if (temp.has(arr[i])) {
            temp.delete(arr[i])
            check.add(arr[i])
        } else if (!temp.has(arr[i]) && !check.has(arr[i])){
            temp.add(arr[i])
        }        
    }
    if (temp.size < k) return ''
    return Array.from(temp)[k-1]
};