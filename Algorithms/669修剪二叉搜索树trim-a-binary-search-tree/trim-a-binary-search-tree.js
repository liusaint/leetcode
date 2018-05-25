/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @param {number} L * @param {number} R * @return {TreeNode} */
var trimBST = function(root, L, R) {
    if (!root) {
        return null;
    }
    var val = root.val;
    if (val < L) {
        return root.right ? trimBST(root.right, L, R) : null;
    } else if (val > R) {
        return root.left ? trimBST(root.left, L, R) : null;
    } else {
        if (val == L) {
            root.left = null;
            root.right = trimBST(root.right, L, R);
        } else if (val == R) {
            root.left = trimBST(root.left, L, R);
            root.right = null;
        } else {
            root.left = trimBST(root.left, L, R);
            root.right = trimBST(root.right, L, R);
        }
        return root;
    }
};