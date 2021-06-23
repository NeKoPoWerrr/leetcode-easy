/**
 * @param {string} s
 * @return {string}
 */
 var sortSentence = function(s) {
    var index = [];
    var tempString = '';
    var sentence = [];
    var sortSentence = new Array(sentence.length);
    //去尋找數字與非數字
    for(var i = 0; i < s.length ; i++){
        if( !isNaN(s[i]) && s[i] != ' '){
            index.push(s[i]);
            sentence.push(tempString);
            tempString = '';
        }else if( isNaN(s[i]) && s[i] != ' '){
            tempString += s[i];
        }
    }
    //把對應的index放入對的值
    for(var k = 0; k < sentence.length ; k++){
        sortSentence[index[k]-1] = sentence[k];
    }
return sortSentence.join(" ");
};

/*
var sortSentence = function(s) {
    //split unordered sentence into array of words
    //sort based on last letter??
    // split words into array, reverse order, order the sentence, reverse words back to normal, join words, join sentence
    
    //把字串倒過來
    s = s.split(" ");
    for (let i = 0; i < s.length; i++) {
        s[i] = s[i].split("").reverse();
    }
    //用數字去排列
    s = s.sort((a,b) => a[0]- b[0]);
    //pop每個字串最後一個字
    for (let i = 0; i < s.length; i ++) {
        s[i] = s[i].reverse();
        s[i].pop();
        s[i] = s[i].join("");
        
    }
    s = s.join(" ");
    return s;
};
*/