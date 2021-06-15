/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var pushArray = function(array,x,y){
    for(var i = 0 ; i < x ; i++){
        array.push(y);
    }
    return array;
}

var decompressRLElist = function(nums) {
    var answer = [];
    //或是可以
    /*
    for(var i = 0; i < nums.length -1 ; i++){
        for(var j = 0; j < nums[i];j++){
            array.push(nums[i+1])
        }
        i++
    }
    */
    for(var i = 0; i < nums.length -1 ; i+=2){
        for(var j = i+1; j < nums.length;j++){
            pushArray(answer,nums[i],nums[j]);
            break;
        }
    }
    return answer;
};

/*看解答

/**
 * @param {number[]} nums
 * @return {number[]}
 var decompressRLElist = function(nums) {
    let r = []
    for (let i = 0; i < nums.length - 1; i += 2) { 
        const freq = nums[i]
        const val = nums[i + 1];
        
        r = r.concat(Array(freq).fill(val))
    }
    
    return r
    
};
*/