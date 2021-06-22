/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
 var countMatches = function(items, ruleKey, ruleValue) {
    var pos;
    var count = 0;
    if(ruleKey === "type") pos = 0;
    if(ruleKey === "color") pos = 1;
    if(ruleKey === "name") pos = 2;
    for(var item of items){
        if(item[pos] === ruleValue) count ++;
    }
return count;
};

/*
const TYPE_MAP = {
  type: 0,
  color: 1,
  name: 2,
};

 var countMatches = function(items, ruleKey, ruleValue) {
    let count = 0;
    items.forEach((item) => {
      item[TYPE_MAP[ruleKey]] === ruleValue && (count += 1);
    });
    return count;
  };
*/