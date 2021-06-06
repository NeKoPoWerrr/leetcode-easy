/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */

 var convertAlphabetToInt = (e) => {
    var result = ''; //建立空字串
    for(var i = 0; i < e.length ; i++){
        result += "" + e[i].charCodeAt() - 97;
        /*
        字串result儲存每一個轉換成ASCII數字並-97
        需用result = result + "" + 數字才能寫入空字串
        */
    }
    return result;
}

//參考 js更改字串方法

var isSumEqual = function(firstWord, secondWord, targetWord) {
    var firstWordint = parseInt(convertAlphabetToInt(firstWord));
    var secondWordint = parseInt(convertAlphabetToInt(secondWord));
    var targetWordint = parseInt(convertAlphabetToInt(targetWord));
    var result = targetWordint == firstWordint + secondWordint;
    //判斷result是否為true
    return result;    
};