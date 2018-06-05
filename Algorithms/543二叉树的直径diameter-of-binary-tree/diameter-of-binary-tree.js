/* leetcode　543二叉树的直径diameter-of-binary-tree JavaScript实现　*/

/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {number} */
var diameterOfBinaryTree = function(root) {
    var max = 0; /*    核心思想是计算每个节点左右高度和。加起来就是这个节点下的最大路径。假设每个最长路径都要经过一个根节点。*/
    function check(root) {
        if (!root) {
            return 0;
        }
        var val = root.val;
        var left = root.left;
        var right = root.right;
        var sum = nodeHeight(root.left) + nodeHeight(root.right);
        if (sum > max) {
            max = sum;
        }
        check(root.left);
        check(root.right);
    } /*    计算每个节点的高度。*/
    function nodeHeight(root) {
        if (!root) {
            return 0;
        }
        return Math.max(nodeHeight(root.left), nodeHeight(root.right)) + 1;
    }
    check(root);
    return max;
};