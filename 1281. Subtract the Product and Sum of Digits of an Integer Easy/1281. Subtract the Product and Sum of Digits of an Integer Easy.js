/**
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    var nlist=[];
    var product = 1;
    var sum = 0;
    while(n!=0){ //取出數字n的每一個數字
        nlist.push(n%10);
        n = parseInt(n/10);
    }
    for(var i = 0; i < nlist.length ; i++){
        product = product * nlist[i];
        sum = sum + nlist[i];
    }
    return product - sum;
};

/**
 * @param {number} n
 * @return {number}
 */
/* 運用Array.from
const getProductOfDigits = (n) => {
    const arrayOfDigits = Array.from(String(n), Number)
    return arrayOfDigits.reduce((acc, digit) => {
        return acc * digit    
    }, 1) 
}

const getSumOfDigits = (n) => {
    const arrayOfDigits = Array.from(String(n), Number)
    return arrayOfDigits.reduce((acc, digit) =>{
        return acc + digit
    })
}

const subtractProductAndSum = (n) => {
    return getProductOfDigits(n) - getSumOfDigits(n)
    
    let sum = 0
    let product = 1
    
    const arrayOfDigits = Array.from(String(n), Number)
    
    for(let i = 0; i < arrayOfDigits.length; i++ ) {
        sum = sum + arrayOfDigits[i]
        product = product * arrayOfDigits[i] 
    }
    
    return product - sum
};
*/