/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {number} */
var sumOfLeftLeaves = function(root) {
    if (root == null) {
        return 0;
    }
    var sum = 0;
    var left = root.left;
    var right = root.right; /*        没有叶子的才是叶子。*/
    if (left != null && left.left == null && left.right == null) {
        sum = sum + left.val + sumOfLeftLeaves(right);
    } else {
        sum = sum + sumOfLeftLeaves(left) + sumOfLeftLeaves(right);
    }
    return sum;
};