/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {number[]} */
var averageOfLevels = function(root) {
    var checkArr = [root];
    var resArr = [root.val];
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
            var sum = checkArr.reduce(function(a, b) {
                return a + b.val;
            }, 0);
            resArr.push(sum / checkArr.length);
        }
    }
    return resArr;
};