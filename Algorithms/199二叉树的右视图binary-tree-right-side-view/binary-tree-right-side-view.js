/* leetcode　199二叉树的右视图binary-tree-right-side-view JavaScript实现　*/

/*层次遍历返回每层最右一个。*/
var rightSideView = function(root) {
    if (root == null) {
        return [];
    }
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
            resArr.push(checkArr[checkArr.length - 1].val);
        }
    }
    return resArr;
};