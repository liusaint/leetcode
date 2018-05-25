/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @param {number} sum * @return {number[][]} */
var pathSum = function(root, sum) { /*    递归的时候把上一级的path和结论的arr传入。*/
    var binaryTreePaths = function(root, path, arr) {
        if (!root) {
            return [];
        }
        if (!arr) {
            arr = [];
        }
        var val = root.val;
        path = path ? path + '->' + val : val.toString();
        if (!root.left && !root.right) {
            var resPath = path.split('->').map(function(v) {
                return Number(v);
            });
            if (resPath.reduce(function(a, b) {
                    return a + Number(b);
                }, 0) == sum) {
                arr.push(resPath);
            }
        } else {
            root.left && binaryTreePaths(root.left, path, arr);
            root.right && binaryTreePaths(root.right, path, arr);
        }
        return arr;
    }
    return binaryTreePaths(root);
};