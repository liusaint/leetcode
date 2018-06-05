/* leetcode　110平衡二叉树balanced-binary-tree JavaScript实现　*/

/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {boolean} */
var isBalanced = function(root) {
    if (!root) {
        return true;
    }
    if (Math.abs(nodeHeight(root.left) - nodeHeight(root.right)) > 1) {
        return false;
    } else {
        return isBalanced(root.left) && isBalanced(root.right);
    }

    function nodeHeight(node) {
        if (node == null) {
            return 0;
        }
        return Math.max(nodeHeight(node.left), nodeHeight(node.right)) + 1;
    }
}