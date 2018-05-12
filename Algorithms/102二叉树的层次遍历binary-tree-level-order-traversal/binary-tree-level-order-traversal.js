/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {number[][]} */
var levelOrder = function(root) {
    if (root == null) {
        return [];
    }
    var checkArr = [root];
    var resArr = [
        [root.val]
    ];
    while (checkArr.length > 0) {
        var newCheckArr = [];
        for (var i = 0; i < checkArr.length; i++) {
            var item = checkArr[i];
            if (item.left) {
                newCheckArr.push(item.left);
            }
            if (item.right) {
                newCheckArr.push(item.right);
            }
        }
        checkArr = newCheckArr;
        if (checkArr.length > 0) {
            var levelArr = checkArr.map(function(v, i) {
                return v.val;
            });
            resArr.push(levelArr);
        }
    }
    return resArr;
};