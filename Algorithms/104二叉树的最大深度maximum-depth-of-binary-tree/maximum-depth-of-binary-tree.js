/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */
var maxDepth = function(root) {
    var res = 0;
    if (root == null) {
        return 0;
    }
    var checkArr = [root];
    while (checkArr.length > 0) {
        res++;
        var newCheckArr = [];
        checkArr.forEach(function(v, i) {
            v.left && newCheckArr.push(v.left);
            v.right && newCheckArr.push(v.right);
        });
        checkArr = newCheckArr;
    }
    return res;
};