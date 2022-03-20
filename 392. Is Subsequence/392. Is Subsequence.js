/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
 var isSubsequence = function(s, t) {
    for (var i = 0; i < t.length; i++) {
   var a = s.indexOf(t[i])
   if (a === 0){
     s = s.replace(s[0], '')
   }
}
    return s.length === 0
};

