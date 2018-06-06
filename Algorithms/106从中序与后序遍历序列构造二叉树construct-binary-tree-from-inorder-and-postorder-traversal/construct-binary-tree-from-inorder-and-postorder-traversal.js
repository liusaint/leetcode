/* leetcode　106.从中序与后序遍历序列构造二叉树 JavaScript实现　*/

var buildTree = function(inorder, postorder) {
    var len = inorder.length;
    if (len == 0) {
        return null;
    }
    if (len == 1) {
        return new TreeNode(inorder[0]);
    }
    var rootVal = postorder.pop();
    var root = new TreeNode(rootVal);
    var rootIndexInorder = inorder.indexOf(rootVal); /*    左右子树的中序*/
    var leftTreeInorder = inorder.slice(0, rootIndexInorder);
    var rightTreeInorder = inorder.slice(rootIndexInorder + 1); /*    在后序中的位置。默认为最后一个。*/
    var postorderSplitIndex = postorder.length;
    for (var i = 0; i < postorder.length; i++) {
        var item = postorder[i];
        if (leftTreeInorder.indexOf(item) < 0) {
            postorderSplitIndex = i;
            break;
        }
    } /*    左右子树的后序*/
    var leftTreePostorder = postorder.slice(0, postorderSplitIndex);
    var rightTreePostorder = postorder.slice(postorderSplitIndex); /*    递归*/
    root.left = buildTree(leftTreeInorder, leftTreePostorder);
    root.right = buildTree(rightTreeInorder, rightTreePostorder);
    return root;
};