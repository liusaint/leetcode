/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {number[]} */
var preorderTraversal = function(root) {
    var res = [];
    if (!root) {
        return res;
    }
    var stack = [root];
    while (stack.length > 0) { /*        取第一个。*/
        var item = stack.shift();
        res.push(item.val);
        if (item.right) {
            stack.unshift(item.right);
        }
        if (item.left) {
            stack.unshift(item.left);
        }
    }
    return res;
};