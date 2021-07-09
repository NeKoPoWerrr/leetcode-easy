/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var canMakeArithmeticProgression = function(arr) {
    arr.sort((a,b)=> a -b);
    for(var i = 1; i < arr.length -1; i++){
        if(arr[i] - arr[i-1] != arr[i+1] - arr[i]){
            return false;
            break;
        }
    }
    return true;
};