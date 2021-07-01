/**
 * @param {string} s
 * @return {boolean}
 */
 var halvesAreAlike = function(s) {
    var forwardSum = 0;
    var backwardSum = 0;
    for(var i = 0; i < s.length ; i++){
        if( i < s.length/2){
            if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i'|| s[i] =='o'|| s[i] =='u'|| s[i] =='A'|| s[i] =='E'|| s[i] =='I'|| s[i] =='O'|| s[i] =='U'){
                forwardSum ++;
            }
        }else{
            if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i'|| s[i] =='o'|| s[i] =='u'|| s[i] =='A'|| s[i] =='E'|| s[i] =='I'|| s[i] =='O'|| s[i] =='U'){
                backwardSum ++;
            }
        }
    }
    return forwardSum == backwardSum;
};

/*
sliding window

 var halvesAreAlike = function(s) {
    const target = new Set(["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"]);
 let a = 0, b = 0;
 for (let left = 0, right = s.length - 1; left < right; ++left, --right) {
   target.has(s[left]) && ++a;
   target.has(s[right]) && ++b;
 }
 return a === b;
};
*/