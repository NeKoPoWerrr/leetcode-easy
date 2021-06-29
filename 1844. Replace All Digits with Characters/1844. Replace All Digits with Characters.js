/**
 * @param {string} s
 * @return {string}
 */
 var replaceDigits = function(s) {
    var tempNumber;
    var result = '';
    for(var i = 0; i < s.length; i++){
        if(!isNaN(s[i])){
            tempNumber = s[i-1].charCodeAt(0) + Number(s[i]);
            result += String.fromCharCode(tempNumber);
        }else{
            result += s[i];
        }
    }
    return result;
};