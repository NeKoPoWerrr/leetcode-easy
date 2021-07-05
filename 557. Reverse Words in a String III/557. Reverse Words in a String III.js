/**
 * @param {string} s
 * @return {string}
 */
 var reverseWords = function(s) {
    var result ='';
    var sentence = s.split(' ').reverse().join(' ');
    for(var i = sentence.length-1 ; i >= 0; i--){
        result += sentence[i];
    }
    return result;
};
/*
var reverseWords = function (s) {
    let arr = s.split(" ");
    let arr2 = [];
    arr.map((item) => {
        let str = item.split("").reverse().join("");
        arr2.push(str);
    });
    let s2 = arr2.join(" ");
    return s2;
};
*/