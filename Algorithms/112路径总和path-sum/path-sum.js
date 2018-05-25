/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @param {number} sum * @return {boolean} */
var hasPathSum = function(root, sum) { /*    递归的时候把上一级的path和结论的arr传入。*/
    var binaryTreePaths = function(root, path) {
        if (!root) {
            return false;
        }
        var val = root.val;
        path = path ? path + '->' + val : val.toString();
        if (!root.left && !root.right) {
            if (path.split('->').reduce(function(a, b) {
                    return a + Number(b);
                }, 0) == sum) {
                return true;
            }
            return false;
        } else {
            return (root.left && binaryTreePaths(root.left, path)) || (root.right && binaryTreePaths(root.right, path));
        }
        return false;
    }
    return binaryTreePaths(root) || false;
};