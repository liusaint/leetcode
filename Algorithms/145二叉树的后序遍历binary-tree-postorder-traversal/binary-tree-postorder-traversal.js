/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {number[]} */
var postorderTraversal = function(root) {
    var res = [];
    if (!root) {
        return res;
    }
    var stack = [root];
    while (stack.length > 0) {
        var item = stack[stack.length - 1]; /*        满足这些就可以直接输出它了。它是叶子节点。或它的子节点都ok了。*/
        if ((item.left == null && item.right == null) || (item.left && item.left.isOk && item.right && item.right.isOk) || (item.left &&             item.left.isOk && item.right == null) || (item.left == null && item.right && item.right.isOk)) {
            item.isOk = true;
            res.push(item.val);
            stack.pop();
        } else if (item.left && !item.left.isOk) { /*            如果左边的没ok，就把左边的入栈*/
            stack.push(item.left);
        } else if (item.right && !item.right.isOk) { /*            如果右边的没ok就把右边的入栈。*/
            stack.push(item.right);
        }
    }
    return res;
};