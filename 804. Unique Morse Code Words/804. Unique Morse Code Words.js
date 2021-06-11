/**
 * @param {string[]} words
 * @return {number}
 */

/*因在判斷上(findDiff)未解出來 所以查了資料寫了三種方法*/


 function findDiff(array){
     //Set方法 Set存進去會是唯一值所以直接存就好
    var answer = new Set()
     for(var i=0;i<array.length;i++){
        answer.add(array[i]);
     }
    return answer.size;


    //answer陣列去存 遇到沒在answer陣列裡就push進answer
    // var answer = [];
    // for(var i=0;i<array.length;i++){
    //     if(!answer.includes(array[i])){
    //         answer.push(array[i]);
    //     }
    // }
    // return answer.length;

    //Object.keys()用法 answer物件去存array 如果一樣就+1 
    // var answer = {};
    // array.forEach((e)=>{
    //     answer[e] = answer[e] ? answer[e] +1 : 1
    // })
    // return Object.keys(answer).length;
}

var uniqueMorseRepresentations = function(words) {
    var morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
    var answer = '';
    var answerlist=[];
    var pos = 0;
    for(var i = 0;i < words.length ; i++){
        for(var j = 0 ; j < words[i].length; j++){
            pos = words[i][j].charCodeAt() - 97;
            answer = answer + morse[pos];
            answerlist[i] = answer;
        }       
        pos = 0;
        answer = '';
    }
    return findDiff(answerlist);
};