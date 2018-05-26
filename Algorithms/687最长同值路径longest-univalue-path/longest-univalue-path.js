var longestUnivaluePath = function(root) { /*    找一个节点的同值路长度。*/ /*    传递了isRoot，表示是这次查找的根。返回左右之和。*/ /*    否则返回最大的那个。*/
    var findPath = function(root, path, isRoot) {
        if (!root) {
            return 0;
        }
        if (!path) {
            path = 0;
        }
        var val = root.val;
        var leftPath = 0;
        if (root.left && root.left.val == root.val) {
            leftPath = findPath(root.left, path + 1);
        }
        var rightPath = 0;
        if (root.right && root.right.val == root.val) {
            rightPath = findPath(root.right, path + 1);
        }
        if (!isRoot) { /*            如果left，right都为0,则返回path。*/
            return Math.max(leftPath, rightPath) || path;
        } else {
            return leftPath + rightPath;
        }
    }
    var max = 0; /*    遍历求最大*/
    var readRoot = function(root) {
        if (!root) {
            return;
        }
        var rootPath = findPath(root, 0, true);
        if (rootPath > max) {
            max = rootPath;
        }
        root.left && readRoot(root.left);
        root.right && readRoot(root.right);
    }
    readRoot(root);
    return max;
};