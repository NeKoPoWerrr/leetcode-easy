/**
 * @param {string} address
 * @return {string}
 */
 var defangIPaddr = function(address) {
    return address.replace(/\./g, '[.]'); //需參考Regex .需用\分開 g為global
};

/*
也可以用replaceAll('.','[.]') →方法較新可能不支援
也可以用split('.').join('[.]')
也可以用
```
var defangIPaddr = function(address) {
    let newString = "";
    let tempString = "";
    for(let i=0; i<address.length; i++){
        if(address[i] !== "."){
            tempString += address[i];
        }else{
            newString += tempString;
            newString += "[.]";
            tempString = "";
        }
    }
    newString += tempString;
    return newString;
};
```
*/