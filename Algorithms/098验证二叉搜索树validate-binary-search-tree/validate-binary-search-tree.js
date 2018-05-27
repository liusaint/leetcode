/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {boolean} */
var isValidBST = function(root) { /*    检测子节点是否符合要求。*/
    var checkChild = function(root, centerVal, dir) {
        if (!root) {
            return true;
        }
        var val = root.val; /*        左子树*/
        if (dir == 'left' && val >= centerVal) {
            return false;
        } /*        右子树*/
        if (dir == 'right' && val <= centerVal) {
            return false;
        }
        return checkChild(root.left, centerVal, dir) && checkChild(root.right, centerVal, dir);
    }

    function readNode(root) {
        if (!root) {
            return true;
        }
        if ((!checkChild(root.left, root.val, 'left')) || (!checkChild(root.right, root.val, 'right'))) {
            return false;
        }
        return readNode(root.left) && readNode(root.right);
    }
    return readNode(root);
};