/**
 * @param {number[][]} mat
 * @param {number} k
 * @return {number[]}
 */
 var kWeakestRows = function(mat, k) {
    var i = 0;
    var result = [];
    var answer = [];
    for(var i = 0; i < mat.length; i++){
        var count = 0;
        for(var j = 0; j < mat[i].length; j++){
            
            if(mat[i][j] == 1) count++;
        }
        result.push([i,count]);
    }
    result.sort((a,b)=>a[1] - b[1]);

    for(var i = 0; i < k; i++){
        answer.push(result[i][0]);
    }
    return answer;
};
/*
function kWeakestRows(mat, k) {

    let hash = {};
  
    for (let i=0; i<mat.length; i++) {
      var numSoldiers = 0;
  
      for (let j=0; j<mat[i].length; j++) {
  
        if (mat[i][j] === 1) {
          numSoldiers = numSoldiers + 1;
        }
      }
      hash[i] = numSoldiers;
    }
    console.log(hash);
  
    let keys = Object.keys(hash);
  
    keys.sort((a,b) => hash[a] - hash[b]);
  
    return keys.slice(0, k)
  
  
  }
  */