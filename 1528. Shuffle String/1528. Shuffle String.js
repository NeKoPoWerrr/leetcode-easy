/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
 var restoreString = function(s, indices) {
    var temp = [];
    for(var i = 0;i<s.length;i++){
        temp[indices[i]] =  s[i];
    }
    return temp.slice('').join('');
};