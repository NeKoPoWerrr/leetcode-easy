/**
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    return image.map((item, i)=> {
        return item.reverse().map((items, j)=> {
                return items === 1 ? 0 : 1
        })
    })
};