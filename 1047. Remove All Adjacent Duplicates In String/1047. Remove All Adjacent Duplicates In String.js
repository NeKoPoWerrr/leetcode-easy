/**
 * @param {string} s
 * @return {string}
 */
 var removeDuplicates = function(s) {
    var sArray = s.split('');
    
    for(var i = 0;i < sArray.length -1; i++){
        while(i >= 0 && sArray[i] === sArray[i+1]){
            sArray.splice(i,2);
            i--;
        }
    }
    return sArray.join('');
};

/*
var removeDuplicates = function(s) {
     let a = [];
    for(let i=0; i<s.length; i++){
        if(s[i] !== a[a.length-1]) {
           a.push(s[i]);
        }
        else{
          a.pop()
        }
    }
    return a.join("")
};
*/