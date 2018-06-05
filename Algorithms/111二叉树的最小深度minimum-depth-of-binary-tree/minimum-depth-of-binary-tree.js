/* leetcode　111二叉树的最小深度minimum-depth-of-binary-tree JavaScript实现　*/

/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {number} */
var minDepth = function(root) {
    var res = 0;
    if (root == null) {
        return 0;
    }
    var checkArr = [root];
    while (checkArr.length > 0) {
        res++;
        var newCheckArr = []; /*        注意checkArr.some有满足的就停止迭代。*/
        if (checkArr.some(function(v, i) {
                v.left && newCheckArr.push(v.left);
                v.right && newCheckArr.push(v.right);
                return !v.left && !v.right;
            })) {
            return res;
        };
        checkArr = newCheckArr;
    }
    return res;
};