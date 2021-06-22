/**
 * @param {string} s
 * @return {number}
 */
 var balancedStringSplit = function(s) {
    var rCount = 0;
     var lCount = 0;
     var temp = [];
     var tempString = '';
     for(var i = 0;i < s.length; i++){
         if(s[i] === 'R'){ rCount++ };
         if(s[i] === 'L'){ lCount++ };
         if(rCount !== lCount){
             tempString += s[i];
         }else if(rCount == lCount && rCount!= 0 && lCount != 0){
             tempString += s[i];
             temp.push(tempString);
             tempString = '';
             rCount = 0;
             lCount = 0;
         }
     }
     return temp.length;
 };

 /*
 var balancedStringSplit = function(s) {
  let l = 0;
  let r = 0;
  let counter = 0;

  for (let i = 0; i < s.length; i += 1) {
    if (s[i] === 'R') {
      r += 1;
    }
    if (s[i] === 'L') {
      l += 1;
    }
    if (l === r) {
      counter += 1;
    }
  }
  return counter;
};
 
 */