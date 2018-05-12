/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */
var invertTree = function(root) {
    if (root == null) {
        return root;
    }
    var left = root.left;
    var right = root.right;
    if (left == null && right == null) {
        return root;
    }
    root.left = invertTree(right);
    root.right = invertTree(left);
    return root;
};