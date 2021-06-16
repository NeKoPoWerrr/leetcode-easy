/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
 var decode = function(encoded, first) {
    var array=[];
    array[0] = first;
    for(var i = 0;i < encoded.length; i++){
        array[i+1] = array[i] ^ encoded[i];
    }
    return array;
};