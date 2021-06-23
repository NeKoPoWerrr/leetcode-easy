/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
 var rangeSumBST = function(root, low, high) {
    var sum = 0;
    //DFS 排列
    function dfs(root){
        //不是root中的數字就跳出
        if(!root){
            return;
        }
        //root比high高，走左邊
        if(root.val > high){
            dfs(root.left);
        }
        //root比low低，走右邊
        else if(root.val < low){
            dfs(root.right);
        //找到該值了
        }else{
            //加起來
            sum += root.val;
            //再以此數字去跑左右邊
            dfs(root.left);
            dfs(root.right);
        }
    };    
    dfs(root);
    return sum;
};
