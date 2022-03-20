/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
    var res = ''
    var c = a.split('').reverse().join('')
    var d = b.split('').reverse().join('')
    let carry = false
    for (var i = 0; i < Math.max(c.length, d.length); i++) {
        if(c[i] === undefined) {
            c += '0'
        }
        if(d[i] === undefined) {
            d += '0'
        }
        if (carry === false) {
            if (parseInt(c[i]) + parseInt(d[i]) === 2) {
                carry = true
                res += '0'
            } else if (parseInt(c[i]) + parseInt(d[i]) === 1) {
                res += '1'
            } else if (parseInt(c[i]) + parseInt(d[i]) === 0) {
                res += '0'
            }
        } else {
            if (parseInt(c[i]) + parseInt(d[i]) + 1 === 3) {
                res += '1'
            } else if (parseInt(c[i]) + parseInt(d[i]) + 1 === 2) {
                res += '0'           
            } else if (parseInt(c[i]) + parseInt(d[i]) + 1 === 1) {
                carry = false
                res += '1'           
            }
        }
        if (carry === true && i === Math.max(c.length, d.length) - 1) {
            res += '1'
        }
    }
    return res.split('').reverse().join('')
};

/*
初次嘗試即正解，但位元數不夠需用BigInt才行
 * @param {string} a
 * @param {string} b
 * @return {string}
 var addBinary = function(a, b) {
    const aBin = `0b${a}`
    const bBin = `0b${b}`
    const sum = BigInt(aBin) + BigInt(bBin)
    return sum.toString(2)
};
*/