/**
 * @param {string} command
 * @return {string}
 */
 var interpret = function(command) {
    var temp = [];
    //如果遇到()，則放入o
     for(var i = 0; i < command.length ; i++){
         if(command[i] == '(' && command[i+1] == ')'){
             temp.push('o');           
    //如果遇到(內容物)或是非( or )就放入該值 
         }else if(command[i] !== ')' && command[i] !== '('){
             temp.push(command[i]);
         }
     }
     return temp.slice('').join('').toString();
 };

 /*看答案 運用replace + REGX
 var interpret = function(command) {
    let res = command;
    let reg1 = /\(\)/g;
    let reg2 = /\(al\)/g;
    let replace1 = 'o';
    let replace2 = 'al';
    
    res = res.replace(reg1, replace1);
    res = res.replace(reg2, replace2);
    
    return res;
};
 
 */