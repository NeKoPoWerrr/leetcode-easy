/**
 * @param {number} n
 * @return {number}
 */
 var numberOfMatches = function(n) {
    var matches = 0;
    while(n != 1){
        if( n%2 == 0 ){
            matches += n/2;
            n = n/2;
        }if( n == 1){
            break ;
        }else if( n%2 != 0){
            matches += (n - 1)/2;
            n = (n-1)/2 +1 ;
        }
    }
    return matches
};