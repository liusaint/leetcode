/* leetcode　117填充同一层的兄弟节点 IIpopulating-next-right-pointers-in-each-node-ii JavaScript实现　*/

/** * Definition for binary tree with next pointer. * function TreeLinkNode(val) { *     this.val = val; *     this.left = this.right = this.next = null; * } */ /** * @param {TreeLinkNode} root * @return {void} Do not return anything, modify tree in-place instead. */
var connect = function(root) {
    if (root != null) {
        var checkArr = [root];
        while (checkArr.length > 0) {
            var newCheckArr = [];
            for (var i = 0; i < checkArr.length; i++) {
                var item = checkArr[i];
                item.next = checkArr[i + 1] || null;
                if (item.left) {
                    newCheckArr.push(item.left);
                }
                if (item.right) {
                    newCheckArr.push(item.right);
                }
            }
            checkArr = newCheckArr;
        }
    }
};