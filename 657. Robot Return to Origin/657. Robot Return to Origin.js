/**
 * @param {string} moves
 * @return {boolean}
 */
 var judgeCircle = function(moves) {
    var x = 0,y = 0;
    for(var item of moves){
        switch(item){
            case 'U': y++; break;
            case 'D': y--; break;
            case 'L': x--; break;
            case 'R': x++; break;
        }
    }
    return x === 0  && y===0;
};