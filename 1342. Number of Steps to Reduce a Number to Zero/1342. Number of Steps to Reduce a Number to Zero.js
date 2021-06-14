/**
 * @param {number} num
 * @return {number}
 */
 var numberOfSteps = function(num) {
    var steps = [];
    while(num){
        if(num % 2 == 0){
            num = num/2;
            steps.push(num/2);
        }
        else if(num %2 == 1){
            num = num-1;
            steps.push(num-1);
        }
    }
    return steps.length;
};