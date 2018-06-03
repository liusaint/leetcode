/*中序遍历搜索树。就有序增长的。*/
var recoverTree = function(root) {
    var prev;
    var node1;
    var node2;
    findTwoNode(root);
    if (node1 != null && node2 != null) {
        var temp = node1.val;
        node1.val = node2.val;
        node2.val = temp;
    }

    function findTwoNode(root) {
        if (root == null) return;
        findTwoNode(root.left);
        if (prev != null && prev.val > root.val) {
            if (node1 == null) {
                node1 = prev;
            }
            node2 = root;
        }
        prev = root;
        findTwoNode(root.right);
    }
};