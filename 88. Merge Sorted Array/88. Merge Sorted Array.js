/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    var front = m - 1 ,back = n - 1;
    
    for(var i = m+n-1 ; i >= 0; i--){
        if(back < 0) break;
        if(nums1[front] > nums2[back]){
            nums1[i] = nums1[front];
            front --;
        }else{
            nums1[i] = nums2[back];
            back--;
        }
    }
};

/*

var merge = function(nums1, m, nums2, n) {
  // return nums1.concat(nums2).filter(num => num > 0).sort((acc,num) => acc - num);
  
  if (nums1.length - n === m) {
    nums1.splice(m, n);
  }
  nums1.push(...nums2);
  nums1.sort((acc,num) => acc - num);
  return nums1;
};
*/