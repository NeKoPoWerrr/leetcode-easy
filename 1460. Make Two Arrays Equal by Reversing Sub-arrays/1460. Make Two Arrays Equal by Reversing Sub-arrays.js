/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
 var canBeEqual = function(target, arr) {
    target.sort();
    arr.sort();
    if(target.length == arr.length){
        for(var i = 0;i < target.length; i++){
            if(target[i] != arr[i]){
                return false
            }else if(i == target.length -1){
                return true;
            }
        }
    }else{
        return false;
    }
};

/*
const canBeEqual = (target, arr) => {
    let count = new Array(1001).fill(0);
    for(let i=0; i<target.length; i++){
        count[target[i]]++;
        count[arr[i]]--;
    }
    for(let i of count){
        if(i != 0)  return false;
    }
    return true;
};
*/