/**
 * @param {number[]} arr
 * @return {number}
 */
 var peakIndexInMountainArray = function(arr) {
    
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > arr[i+1])   return i;
    }
};
/*
var peakIndexInMountainArray = function(arr) {
    return arr.indexOf(Math.max(...arr));
};
*/