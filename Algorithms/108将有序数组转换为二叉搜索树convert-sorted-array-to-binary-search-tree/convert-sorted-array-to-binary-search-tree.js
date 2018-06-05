/* leetcode　108将有序数组转换为二叉搜索树convert-sorted-array-to-binary-search-tree JavaScript实现　*/

/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {number[]} nums * @return {TreeNode} */
var sortedArrayToBST = function(nums) {
    var len = nums.length;
    var mid = Math.floor(len / 2);
    if (len == 0) {
        return null;
    }
    var node = new TreeNode(nums[mid]);
    if (mid > 0) {
        node.left = sortedArrayToBST(nums.slice(0, mid));
    }
    if (mid + 1 <= len) {
        node.right = sortedArrayToBST(nums.slice(mid + 1));
    }
    return node;
};