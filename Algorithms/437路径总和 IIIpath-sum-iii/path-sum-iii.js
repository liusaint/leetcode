/* leetcode　437路径总和 IIIpath-sum-iii JavaScript实现　*/

/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @param {number} sum * @return {number} */
var pathSum = function(root, sum) {
    var count = 0; /*    递归的时候把上一级的path传入。*/
    var binaryTreePaths = function(root, path) {
        if (!root) {
            return;
        }
        var val = root.val;
        path = path ? path + '->' + val : val.toString(); /*        翻转处理一下，从最后一个往前加。*/
        var resPath = path.split('->').map(function(v) {
            return Number(v);
        }).reverse();
        resPath.reduce(function(a, b) {
            var inSum = a + b; /*            这个迭加。中间有值一样的，也加上。*/
            if (inSum == sum) {
                count++;
            }
            return inSum;
        }, 0);
        root.left && binaryTreePaths(root.left, path);
        root.right && binaryTreePaths(root.right, path);
    }
    binaryTreePaths(root);
    return count;
};