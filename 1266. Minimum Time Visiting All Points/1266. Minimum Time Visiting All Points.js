/**
 * @param {number[][]} points
 * @return {number}
 */
 var minTimeToVisitAllPoints = function(points) {
    var steps = 0;
     var forwardPoint = [];
     var steps = 0;
     for(var i = 0; i < points.length -1; i++){
         forwardPoint.push([Math.abs(points[i][0]-points[i+1][0]),Math.abs(points[i+1][1]-points[i][1])]);
     }
      for(var i = 0; i < forwardPoint.length; i++){
          var j = 0;
          steps += Math.min(forwardPoint[i][j],forwardPoint[i][j+1])
          steps += Math.abs(forwardPoint[i][j]-forwardPoint[i][j+1]);
     }
     return steps;
 };

 /*
 var minTimeToVisitAllPoints = function(points) {
  let res = 0;
  for (let i = 1; i < points.length; i++) {
    res += Math.max(Math.abs(points[i][0] - points[i - 1][0]), 
                    Math.abs(points[i][1] - points[i - 1][1]));
  }
  return res;
};
 */