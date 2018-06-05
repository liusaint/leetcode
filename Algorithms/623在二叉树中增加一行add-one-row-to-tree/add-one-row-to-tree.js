/* leetcode　623在二叉树中增加一行add-one-row-to-tree JavaScript实现　*/

/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @param {number} v * @param {number} d * @return {TreeNode} */
var addOneRow = function(root, v, d) {
    if (root == null) {
        return [];
    }
    var checkArr = [root];
    if (d == 1) {
        var node = new TreeNode(v);
        node.left = root;
        return node;
    }
    var level = 1;
    var ok = false;
    while (checkArr.length > 0) {
        var newCheckArr = [];
        for (var i = 0; i < checkArr.length; i++) {
            var item = checkArr[i];
            if (level + 1 == d) {
                var oriLeft = item.left;
                var oriRight = item.right;
                item.left = new TreeNode(v);
                item.right = new TreeNode(v);
                item.left.left = oriLeft;
                item.right.right = oriRight;
                ok = true;
            } else {
                if (item.left) {
                    newCheckArr.push(item.left);
                }
                if (item.right) {
                    newCheckArr.push(item.right);
                }
            }
        }
        checkArr = newCheckArr;
        level++; /*        迭代到对应的位置就直接返回了。*/
        if (ok == true) {
            return root;
        }
    }
    return root;
};