/* leetcode　662二叉树最大宽度maximum-width-of-binary-tree JavaScript实现　*/

/*层次遍历，每个节点加一个index。根据上层index和left,right来计算下层的index。*/
var widthOfBinaryTree = function(root) {
    if (root == null) {
        return 0;
    }
    var checkArr = [root];
    root.index = 1;
    var maxLen = 1;
    while (checkArr.length > 0) {
        var newCheckArr = [];
        for (var i = 0; i < checkArr.length; i++) {
            var item = checkArr[i];
            if (item.left) {
                newCheckArr.push(item.left);
                item.left.index = item.index * 2 - 1;
            }
            if (item.right) {
                newCheckArr.push(item.right);
                item.right.index = item.index * 2;
            }
        }
        var len = checkArr[checkArr.length - 1].index - checkArr[0].index + 1;
        if (len > maxLen) {
            maxLen = len;
        }
        checkArr = newCheckArr;
    }
    return maxLen;
};