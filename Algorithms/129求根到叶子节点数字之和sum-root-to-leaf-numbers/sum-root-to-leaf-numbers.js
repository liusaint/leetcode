/*先求出所有的路径，前面有个题目有方法。然后计算一下。*/
function sumNumbers(root) { /*    递归的时候把上一级的path和结论的arr传入。*/
    var binaryTreePaths = function(root, path, arr) {
        if (!root) {
            return [];
        }
        if (!arr) {
            arr = [];
        }
        var val = root.val.toString();
        path = path ? path + '->' + val : val;
        if (!root.left && !root.right) {
            arr.push(path);
        } else {
            root.left && binaryTreePaths(root.left, path, arr);
            root.right && binaryTreePaths(root.right, path, arr);
        }
        return arr;
    }
    var pathArr = binaryTreePaths(root);
    return pathArr.reduce(function(a, b) {
        return a + Number(b.split('->').join(''));
    }, 0);
}