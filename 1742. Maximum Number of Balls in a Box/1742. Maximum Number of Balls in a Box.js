/**
 * @param {number} lowLimit
 * @param {number} highLimit
 * @return {number}
 */
 var countBalls = function(lowLimit, highLimit) {
    var max = 0;
    if(lowLimit == highLimit){
        return 1;
    }
    var sum = new Array(highLimit).fill(0);
    for(var i = lowLimit; i <= highLimit; i++){
        var box = i.toString().split('');
        var number = 0;
        for(var j = 0; j < box.length ; j++){            
            number += Number(box[j]);
        }
        sum[number] ++;
    }
    for(var item of sum){
        if(max < item){
            max = item;
        }
    }
    return max;
};

/*
var countBalls = function (lowLimit, highLimit) {
  let n = Math.ceil(Math.log10(highLimit))
  let box = Array(9 * n + 2).fill(0)

  for (let i = lowLimit; i <= highLimit; i++) {
    let sum = 0
    let item = i
    while (item) {
      sum += item % 10
      item = (item - (item % 10)) / 10
    }
    box[sum]++
  }

  let max = 0
  for (let i = 0; i < box.length; i++) {
    max = Math.max(max, box[i])
  }
  return max
};
*/