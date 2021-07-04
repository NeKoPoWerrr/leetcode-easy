/**
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
    var oddCnt = 0;
    var evenCnt = 0;
    for (let n of position) {
        if (n % 2 == 0) {
            evenCnt++;
        } else {
            oddCnt++;
        }
    }
    return Math.min(evenCnt, oddCnt);
};
