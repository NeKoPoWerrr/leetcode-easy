/**
 * @param {number[][]} grid
 * @return {number}
 */
 var countNegatives = function(grid) {
    var count = 0;
    grid.forEach((item)=>{
        item.forEach((items)=>{
            if(items < 0){
                count ++;
            }
        })
    })
    return count;
};