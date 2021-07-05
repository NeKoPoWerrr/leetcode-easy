/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
 var maximumUnits = function(boxTypes, truckSize) {
    boxTypes.sort((a, b) => b[1] - a[1]);
    var count = 0;
    var sum = 0;
    for(var i = 0; i < boxTypes.length; i++){
        count += boxTypes[i][0];
        if(count <= truckSize){
            sum += boxTypes[i][0] * boxTypes[i][1];
        }else{
            sum += (boxTypes[i][0] - count + truckSize)*boxTypes[i][1];
            break;
        }
    }
    return sum;
};

