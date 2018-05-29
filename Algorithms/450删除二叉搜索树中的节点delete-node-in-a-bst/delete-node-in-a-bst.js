function deleteNode(root, key) {
    if (!root) {
        return root;
    }
    var val = root.val;
    if (key < val) {
        root.left = deleteNode(root.left, key);
        return root;
    } else if (key > val) {
        root.right = deleteNode(root.right, key);
        return root;
    } else {
        if (root.left == null && root.right == null) {
            root = null;
            return root;
        }
        if (root.left == null) {
            root = root.right;
            return root;
        }
        if (root.right == null) {
            root = root.left;
            return root;
        }
        var aux = findMinNode(root.right);
        root.val = aux;
        root.right = deleteNode(root.right, aux);
        return root;
    }

    function findMinNode(root) {
        if (!root) {
            return null;
        }
        var minNode = root;
        while (minNode.left) {
            minNode = minNode.left;
        }
        return minNode.val;
    }
}