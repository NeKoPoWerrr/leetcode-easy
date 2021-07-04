/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
 var hammingDistance = function(x, y) {
    var count = 0;
    var xBit = x.toString(2).split('').reverse();
    var yBit = y.toString(2).split('').reverse();
    while(xBit.length != yBit.length){
        if(xBit.length < yBit.length) {xBit.push(0);}
        else {yBit.push(0);}
    }
    for(var i = Math.max(xBit.length, yBit.length)-1 ; i >= 0 ; i--){
        if(xBit[i] != yBit[i]){
            count ++;
        }
    }
    return count;
};
/*
用XOR
var hammingDistance = function(x, y) {
    const xor = (x ^ y).toString(2);
		let count = 0;
		for (let i = 0; i < xor.length; i++) {
    	if (xor[i] === '1') {
      	count += 1
      }
    }
    
    return count;
};
*/