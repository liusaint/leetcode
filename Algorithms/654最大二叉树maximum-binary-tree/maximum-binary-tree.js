/* leetcode　654最大二叉树maximum-binary-tree JavaScript实现　*/

/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {number[]} nums * @return {TreeNode} */
var constructMaximumBinaryTree = function(nums) {
    var len = nums.length;
    if (0 == len) {
        return null;
    }
    var maxI = 0;
    var max = nums[0]; /*    先找到最大值*/
    for (var i = 1; i < len; i++) {
        var item = nums[i];
        if (item > max) {
            maxI = i;
            max = item;
        }
    }
    var root = new TreeNode(max);
    root.left = constructMaximumBinaryTree(nums.slice(0, maxI));
    root.right = constructMaximumBinaryTree(nums.slice(maxI + 1));
    return root;
};