/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var uniqueOccurrences = function(arr) {
    var checkArray= [];
    var hashMap = new Map();
    for(var item of arr){
        if(hashMap.has(item)){
            hashMap.set(item,hashMap.get(item)+1);
        }else{
            hashMap.set(item,1);
        }
    }
    for(var check of Array.from(hashMap.values())){ // num, count
        if(checkArray.includes(check)){
            return false
        }
        checkArray.push(check);
    }
    return true;
};

/*
var uniqueOccurrences = function(arr) {
    let checked = {};
    for(let num of arr) {
        if(!checked[num]) checked[num] = 1;
        else checked[num]++;
    }
    //occurrences 每一個數字出現次數
    let occurrences = Object.values(checked);
    //unique 把occurrences放入set中，如果有重複長度會不一樣
    let unique = [...new Set(occurrences)];
    return occurrences.length == unique.length ? true : false;
};
*/