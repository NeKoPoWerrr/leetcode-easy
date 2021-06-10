/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
 var ParkingSystem = function(big, medium, small) {
    var max = [];
    this.max = [big,medium,small];    //javascript需指定this不然下面get不到
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
    /*
    或是 carType本身就是number
    可以簡化 return this.max[carType-1]-- > 0
    */
     switch(carType){//看進來的是什麼樣的type就把對應位置-1
        case 1 : this.max[0]-- ; if(this.max[0]<0){return false}else{return true}
        case 2 : this.max[1]-- ;if(this.max[1]<0){return false}else{return true}
        case 3 : this.max[2]--;if(this.max[2]<0){return false}else{return true}
    }
};



/** 
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
