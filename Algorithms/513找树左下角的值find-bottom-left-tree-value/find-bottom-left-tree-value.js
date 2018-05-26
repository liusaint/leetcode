/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {number} */
var findBottomLeftValue = function(root) {
    if (root == null) {
        return null;
    }
    var checkArr = [root];
    while (checkArr.length > 0) {
        var newCheckArr = [];
        var leftValue = checkArr[0].val;
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
    }
    return leftValue;
};