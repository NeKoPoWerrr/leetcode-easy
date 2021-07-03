/**
 * @param {number[]} arr
 * @return {number[]}
 */
 var replaceElements = function(arr) {
    if(arr.length == 1){
        arr[0] = -1;
        return arr;
    }
    for(var i = 0 ; i < arr.length-1; i++){
        arr[i] = 0;
        for(var j = i+1 ; j < arr.length; j++){            
            if(i == arr.length-2){
                arr[i] = arr[j];
                arr[j] = -1;
                break;
            }
            else if(arr[i] < arr[j]){
                arr[i] = arr[j];
            }
        }
    }
    return arr;
};

/*
//從後面開始比
var replaceElements = function(arr) {
    size = arr.length
    bigDude = arr[size-1]
    arr[size-1] = -1
    for(let i = size-2; i >= 0; i--)
    {
        temp = arr[i]
        arr[i] = bigDude
        if(bigDude < temp){
            bigDude = temp
        }
    }
    return arr
};
*/