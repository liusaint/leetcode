/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @param {TreeNode} p * @param {TreeNode} q * @return {TreeNode} */
var lowestCommonAncestor = function(root, p, q) {
    var checkArr = [root];
    var resArr = [];
    outWhile: while (checkArr.length > 0) {
        var newCheckArr = [];
        for (var i = 0; i < checkArr.length; i++) {
            var item = checkArr[i]; /*                满足了同级的后面的就不遍历了。*/
            if (hasChild(item, p) && hasChild(item, q)) {
                resArr.push(item);
                if (item.left) {
                    newCheckArr.push(item.left);
                }
                if (item.right) {
                    newCheckArr.push(item.right);
                }
                checkArr = newCheckArr;
                continue outWhile;
            }
        } /*            走到这里说明这个层级都没有符合的了。结束查找。*/
        checkArr = [];
    }
    return resArr[resArr.length - 1]; /*    检查某个节点是否在某个root下面。*/
    function hasChild(root, node) {
        var checkArr = [root];
        while (checkArr.length > 0) {
            var newCheckArr = [];
            for (var i = 0; i < checkArr.length; i++) {
                var item = checkArr[i];
                if (node == item) {
                    return true;
                }
                if (item.left) {
                    newCheckArr.push(item.left);
                }
                if (item.right) {
                    newCheckArr.push(item.right);
                }
            }
            checkArr = newCheckArr;
        }
        return false;
    }
};