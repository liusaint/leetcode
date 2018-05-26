/** * Definition for binary tree * function TreeNode(val) { *     this.val = val; *     this.left = this.right = null; * } */ /** * @constructor * @param {TreeNode} root - root of the binary search tree */
var BSTIterator = function(root) {
    var readRoot = function(root, callback) {
        if (!root) {
            return;
        }
        root.left && readRoot(root.left, callback);
        callback && callback(root.val);
        root.right && readRoot(root.right, callback);
    }
    var arr = [];
    readRoot(root, function(v) {
        arr.push(v);
    }); /*     将节点升序保存到一个数组*/
    this.arr = arr;
    this.index = 0;
}; /** * @this BSTIterator * @returns {boolean} - whether we have a next smallest number */
BSTIterator.prototype.hasNext = function() {
    if (this.index < this.arr.length) {
        return true;
    }
    return false;
}; /** * @this BSTIterator * @returns {number} - the next smallest number */
BSTIterator.prototype.next = function() {
    var res = this.arr[this.index];
    this.index++;
    return res;
}; /** * Your BSTIterator will be called like this: * var i = new BSTIterator(root), a = []; * while (i.hasNext()) a.push(i.next());*/