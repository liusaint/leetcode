/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @param {TreeNode} p * @param {TreeNode} q * @return {TreeNode} */
var lowestCommonAncestor = function(root, p, q) {
    var pVal = p.val;
    var qVal = q.val;
    var checkNode = root;
    var res = root;
    while (true) {
        var rootVal = checkNode.val;
        if (pVal == rootVal || qVal == rootVal) {
            return checkNode;
        } else if (pVal < rootVal && qVal < rootVal && checkNode.left) {
            res = checkNode;
            checkNode = checkNode.left;
        } else if (pVal > rootVal && qVal > rootVal && checkNode.right) {
            res = checkNode;
            checkNode = checkNode.right;
        } else if ((pVal > rootVal && qVal < rootVal) || (pVal < rootVal && qVal > rootVal)) {
            return checkNode;
        } else {
            return res;
        }
    }
};