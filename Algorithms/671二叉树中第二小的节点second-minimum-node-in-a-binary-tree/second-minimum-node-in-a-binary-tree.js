/** * Definition for a binary tree node. * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @param {TreeNode} root * @return {number} */
var findSecondMinimumValue = function(root, arr) {
    if (!root) {
        return -1;
    } /*    arr用于保存第一小，第二小的值。*/
    if (!arr) {
        arr = [];
    }
    var left = root.left;
    var right = root.right;
    var val = root.val; /*    把值放进去，排序。保持数组长度为2.*/
    if (arr.indexOf(val) < 0) {
        arr.push(val);
        arr.sort(function(a, b) {
            return a - b;
        });
        arr.splice(2);
    } /*    这样的可以不遍历它后面的。*/
    if (left && right && arr.length == 2 && val > arr[1]) {} else {
        left && findSecondMinimumValue(left, arr);
        right && findSecondMinimumValue(right, arr);
    }
    if (arr.length < 2) {
        return -1;
    }
    return arr[1];
};