/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
 var wordPattern = function(pattern, s) {
    let a = s.split(' ')
    let map = {}
    let setP = new Set()
    let setS = new Set()
    if (a.length !== pattern.length) return false
    for (var i = 0; i < pattern.length; i++) {
        if (map[pattern[i]] === undefined) {
            setP.add(pattern[i])
            setS.add(a[i])
            map[pattern[i]] = a[i]
            continue
        }
        if (map[pattern[i]] !== a[i]){
            return false
        }
    }
    if(setP.size !== setS.size) return false
    return true
};

