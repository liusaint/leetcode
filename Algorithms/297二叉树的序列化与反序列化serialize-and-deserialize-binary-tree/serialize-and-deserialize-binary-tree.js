/* leetcode　297二叉树的序列化与反序列化serialize-and-deserialize-binary-tree JavaScript实现　*/

/*只要有一个节点不为空，那么一定要有它的左右节点。*/
var serialize = function(root) {
    if (root == null) {
        return '[]';
    }
    var checkArr = [root];
    var resArr = [root.val];
    while (checkArr.length > 0) {
        var newCheckArr = [];
        for (var i = 0; i < checkArr.length; i++) {
            var item = checkArr[i];
            if (item.left) {
                newCheckArr.push(item.left);
                resArr.push(item.left.val);
            } else {
                resArr.push(null);
            }
            if (item.right) {
                newCheckArr.push(item.right);
                resArr.push(item.right.val);
            } else {
                resArr.push(null);
            }
        }
        checkArr = newCheckArr;
    }
    return JSON.stringify(resArr);
}; /** * Decodes your encoded data to tree. * * @param {string} data * @return {TreeNode} */
var deserialize = function(data) {
    if (data == '[]') {
        return null;
    }
    var arr = JSON.parse(data);
    var len = arr.length;
    var root = new TreeNode(arr.shift());
    var nextArr = [root];
    while (arr.length > 0) {
        var newCheckArr = [];
        for (var i = 0; i < nextArr.length; i++) {
            var item = nextArr[i];
            var arrItem1 = arr.shift();
            if (arrItem1 == 'null' || arrItem1 == null) {
                item.left = null;
            } else {
                item.left = new TreeNode(arrItem1);
                newCheckArr.push(item.left);
            }
            var arrItem2 = arr.shift();
            if (arrItem2 == 'null' || arrItem2 == null) {
                item.right = null;
            } else {
                item.right = new TreeNode(arrItem2);
                newCheckArr.push(item.right);
            }
        }
        nextArr = newCheckArr;
    }
    return root;
}; /** * Your functions will be called as such: * deserialize(serialize(root)); */