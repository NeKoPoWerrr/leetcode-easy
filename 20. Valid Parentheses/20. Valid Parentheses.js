/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    var a = []
    if (s.length === 0 || s.length === 1) return false
    for (const st of s) {
        if (st === '(' || st === '[' || st === '{' ) {
            a.push(st)
        } else if (st === ')') {
            if (a[a.length - 1] === '(') {
                a.pop()
            } else {
                return false
            }
        } else if (st === ']') {
            if (a[a.length - 1] === '[') {
                a.pop()
            } else {
                return false
            }
        } else if (st === '}') {
            if (a[a.length - 1] === '{') {
                a.pop()
            } else {
                return false
            }
        }
    }
    if (a.length !== 0) return false
    return true
};

/*
採用物件去比對
const closeBracketPairs = {
    ')': '(',
    '}': '{',
    ']': '['
 }

var isValid = function(s) {
    
    const openBracketsStack = []
    
    for(let i = 0; i < s.length; i++) {
        
        const closeBracketPair = closeBracketPairs[s[i]]
        const isCloseBracket = closeBracketPair !== undefined
        
        if(isCloseBracket) {
            const lastOpenBracket = openBracketsStack.pop()
            const isCloseBracketValid = lastOpenBracket === closeBracketPair
                        
            if(!isCloseBracketValid) {
                return false
            }
        } else {
            openBracketsStack.push(s[i])
        }
        
    }
    
    return openBracketsStack.length === 0
    
};
*/