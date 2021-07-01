/**
 * @param {string} s
 * @return {string}
 */
 const trans = (str,a,b) =>{
    return str.replace(a,b);
}

var sortString = function(s) {
    
    var alphabet = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
    
    const check = (argS, isDesc) => {
        var temp = [];
        var checked = argS;
        //跑一次 alphabet 去找 s 裡面有沒有a-
        for (var i = 0; i < alphabet.length; i++){
            for (var j = 0; j < checked.length; j++){
                if (alphabet[i] == checked[j] && !temp.includes(checked[j])) {
                    temp.push(alphabet[i]);
                    //把找過的設為0
                    checked = trans(checked, checked[j], 0);
                }
            }
        }
        //偶數次是反轉
        result += isDesc
            ? temp.reverse().join('')
            : temp.join('');
        
        if (result.length != checked.length) {
            check(checked, !isDesc);
        }
    }
    
    check(s, false);
    return result;
};

/*
var sortString = function(s) {
    //設置 26 長度array填滿0
    let bucket = new Array(26).fill(0), res = ''
    //去紀錄a-z出現幾次
    for(let c of s) bucket[c.charCodeAt() - 'a'.charCodeAt()]++

    while(res.length < s.length) {
        //正的跑一次有就加進字串
        for(let i=0;i<26;i++) {
            if(bucket[i]) {
                res += String.fromCharCode(i + 'a'.charCodeAt())
                bucket[i]--
            }
        }
        //到底反地跑有就加進字串
        for(let i=25;i>=0;i--) {
            if(bucket[i]) {
                res += String.fromCharCode(i + 'a'.charCodeAt())
                bucket[i]--
            }
        }
    }
    return res
};
*/