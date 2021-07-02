
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
 * @return {TreeNode}
 */
// find root, that is smallest
var queue = [];

var tour = (root) => {
    if (!root) return;
    var { left, right } = root;
    if (left) { tour(left); }
    queue.push(root.val);
    if (right) { tour(right); }
} 

var increasingBST = function(root) {
    queue = [];
    tour(root);
    var nodes = [];
    for (let i = 0; i < queue.length; i++) {
        var node = new TreeNode(queue[i]);
        nodes.push(node);
        if (i > 0) {
            var prevNode = nodes[i - 1];
            prevNode.right = node;
        }
    }
    
    return nodes[0];
};

/*
var increasingBST = function(root) {
    
    let result=[]
    const treverseInOrder=(node)=>{
        if(node.left){treverseInOrder(node.left)}
        
        result.push(node.val)
        
        if(node.right){treverseInOrder(node.right)}
    }
    treverseInOrder(root
                   )
    let newTreeRoot=new TreeNode(result.shift())
    
    let notChangeRoot=newTreeRoot
    
    while(result.length>0){
        notChangeRoot.right=new TreeNode(result.shift())
        notChangeRoot= notChangeRoot.right
    }
    return newTreeRoot
}
*/