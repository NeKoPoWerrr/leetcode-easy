/**
 * @param {number} n
 */

//給定一個pointer跟order存資料的
 var OrderedStream = function(n) {
    this.order = [];
    this.pointer = 1;
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */

OrderedStream.prototype.insert = function(idKey, value) {
    var answer = [];
    //如果idKey是pointer所指就要印出來
    if(idKey == this.pointer){
        answer.push(value);
        //印完後要讓pointer指下一個
        this.pointer++;
        //做檢查，如果接下來pointer都有東西，就要都印出來
        while(this.order[this.pointer]){    
           answer.push(this.order[this.pointer]);
           //pointer繼續往下指
           this.pointer++;
       }
    //沒有則丟進order
    }else{
        this.order[idKey] = value;
    }
    return answer;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */



/*

var OrderedStream = function(n) {
    this.stream = new Array(n).fill(0);
    this.lastPtr = 0;
    this.ptr = 0;
};

OrderedStream.prototype.insert = function(idKey, value) {
    this.stream[idKey - 1] = value;   
    this.lastPtr = this.ptr;
    
    while (this.stream[this.ptr]) {
        this.ptr++;
    }    
    
    return this.stream.slice(this.lastPtr, this.ptr);
};
*/