/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var luckyNumbers  = function(matrix) {
    var maxCol = matrix.map((item)=>Math.min(...item));
    var matrixsRow= [];
    var minRow = [];
    var answer = [];
    for (let i = 0; i < matrix[0].length; i++) {
        matrixsRow[i] = matrix.map((item) => item[i]);
    }
    minRow = matrixsRow.map((item)=>Math.max(...item));
    for (let i = 0; i < Math.max(maxCol.length,minRow.length); i++) {
        if(maxCol.includes(minRow[i])){
             answer.push(minRow[i]);
        }
    }
    return answer;
};

/*
3   7  8
9  11 13
15 16 17
*/

/*
var luckyNumbers  = function(matrix) {
    let result = 0;
    let column = 0;
    
    for(let i = 0; i < matrix.length; i++) {
        let min = Math.min(...matrix[i]);
        if(min > result) {
            result = min;
            column = matrix[i].indexOf(min);
        }
    }
    
    for(let i = 0; i < matrix.length; i++) {
        if(matrix[i][column] > result) {
            return [];
        }
    }
    
    return [result];
};
*/