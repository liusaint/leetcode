/* leetcode　814二叉树剪枝binary-tree-pruning JavaScript实现　*/

/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {TreeNode} */
var pruneTree = function(root) { /*    子节点（包括自己）是否不包含0的。*/
    function findOne(root) {
        if (!root) {
            return false;
        }
        if (root.val == 1) {
            return true;
        }
        if (!root.left && !root.right) {
            return root.val == 1;
        }
        return (root.left && findOne(root.left)) || (root.right && findOne(root.right)) || false;
    }
    if (!findOne(root)) {
        root = null;
        return root;
    }
    if (!findOne(root.left)) {
        root.left = null;
    } else {
        pruneTree(root.left);
    }
    if (!findOne(root.right)) {
        root.right = null;
    } else {
        pruneTree(root.right);
    }
    return root;
};