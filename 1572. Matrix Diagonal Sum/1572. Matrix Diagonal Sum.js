/**
 * @param {number[][]} mat
 * @return {number}
 */
 var diagonalSum = function(mat) {
    let sum = 0
    const Ilength = mat.length
    for (var i = 0, j = i; i < mat.length; i++, j++) {
        if (Ilength % 2 !== 0) {
            if (i === (Ilength - 1) / 2) {
                sum += mat[(Ilength - 1) / 2][(Ilength - 1) / 2]
            } else {
                sum = sum + mat[i][j] + mat[i][Ilength - j - 1]
            }
        } else {
            sum = sum + mat[i][j] + mat[i][Ilength - j - 1]
        }
    }    
    return sum
};
