/* leetcode　094二叉树的中序遍历binary-tree-inorder-traversal JavaScript实现　*/

/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {number[]} */
var inorderTraversal = function(root) {
    var res = [];
    if (!root) {
        return res;
    }
    var stack = [root];
    while (stack.length > 0) {
        var item = stack[stack.length - 1];
        if (!item.left || (item.left && item.left.isOk)) {
            stack.pop();
            item.isOk = true;
            res.push(item.val);
            item.right && stack.push(item.right);
        } else if (item.left && !item.left.isOk) {
            stack.push(item.left);
        }
    }
    return res;
};