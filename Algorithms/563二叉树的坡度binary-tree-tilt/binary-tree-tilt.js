/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {number} */
var findTilt = function(root) { /*    求node和。*/
    function nodeSum(root) {
        if (!root) {
            return 0;
        }
        return nodeSum(root.left) + nodeSum(root.right) + root.val;
    } /*    求某一个节点的坡度*/
    function nodeTilt(root) {
        return Math.abs(nodeSum(root.left) - nodeSum(root.right));
    }

    function find(root) {
        if (!root) {
            return 0;
        }
        return nodeTilt(root) + find(root.left) + find(root.right);
    }
    return find(root);
};