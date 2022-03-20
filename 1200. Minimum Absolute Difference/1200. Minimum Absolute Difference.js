/**
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
    arr = arr.sort((a,b) => a-b)
    let dis = 99999999
    let res = []
    for (let i = 1; i < arr.length; i++) {
        dis = Math.min(dis, arr[i] - arr[i-1])
    }
    for (let i = 1; i < arr.length; i++) {
        let temp = []
        if (arr[i] - arr[i-1] === dis) {
            temp.push(arr[i-1], arr[i])
            res.push(temp)
        }
    }
    return res
};

