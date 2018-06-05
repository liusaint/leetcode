/* leetcode　653两数之和 IV - 输入 BSTtwo-sum-iv-input-is-a-bst JavaScript实现　*/

/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @param {number} k * @return {boolean} */
var findTarget = function(root, k, checkArr) {
    if (!root) {
        return false;
    }
    if (!checkArr) {
        checkArr = [];
    }
    var val = root.val;
    if (checkArr.indexOf(val) > -1) {
        return true;
    } else { /*        遍历一个节点，就把它互补的值放到一个数组。后面检测新的节点的值是不是在这个数组中。*/
        checkArr.push(k - val);
    }
    return (root.left && findTarget(root.left, k, checkArr)) || (root.right && findTarget(root.right, k, checkArr)) || false;
};