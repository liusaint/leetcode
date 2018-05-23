/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {boolean} */
var isSymmetric = function(root) {
    if (!root) {
        return true;
    }
    var Symmetric = function(p, q) {
        if (p == null && q != null) {
            return false;
        }
        if (p != null && q == null) {
            return false;
        } /*        查询到子节点都为null时结束。*/
        if (p == null && q == null) {
            return true;
        }
        if (p.val != q.val) {
            return false;
        } /*         递归对比左叶与右叶。*/
        return Symmetric(p.left, q.right) && Symmetric(p.right, q.left);
    };
    return Symmetric(root.left, root.right);
}