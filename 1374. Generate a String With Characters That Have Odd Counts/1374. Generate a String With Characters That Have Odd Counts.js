/**
 * @param {number} n
 * @return {string}
 */
 var generateTheString = function(n) {
    var ans = '';
    if( n%2 === 0){
        for(var i = 0; i < n - 1; i++){
            ans += 'a';
        }
        ans += 'b';
    }else{
        for(var i = 0; i < n ; i++){
            ans += 'a';
        }
    }
    return ans;
};

/*
var generateTheString = function(n) {
    return n % 2 === 0
        ? `${'a'.repeat(n-1)}b`  
        : 'a'.repeat(n)
}
*/