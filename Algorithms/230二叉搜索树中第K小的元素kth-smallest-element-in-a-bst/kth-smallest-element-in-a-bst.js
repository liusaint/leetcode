/*二叉搜索树中序遍历的结果是一个有序数组。*/
var kthSmallest = function(root, k) {
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
    });
    arr.slice(0, k);
    return arr[k - 1];
};