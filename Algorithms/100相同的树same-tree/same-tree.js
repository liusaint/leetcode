/* leetcode　100相同的树same-tree JavaScript实现　*/

/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} p * @param {TreeNode} q * @return {boolean} */
var isSameTree = function(p, q) {
    if (p == null && q != null) {
        return false;
    }
    if (p != null && q == null) {
        return false;
    } /*    查询到子节点都为null时结束。*/
    if (p == null && q == null) {
        return true;
    }
    if (p.val != q.val) {
        return false;
    } /*     递归对比左叶与右叶。*/
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};