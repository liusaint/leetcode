/* leetcode　105.从前序与中序遍历序列构造二叉树 JavaScript实现　*/

var buildTree = function(preorder, inorder) {
    var len = preorder.length;
    if (len == 0) {
        return null;
    }
    if (len == 1) {
        return new TreeNode(preorder[0]);
    } /*    前序遍历的第一个是根节点。*/
    var rootVal = preorder.shift();
    var root = new TreeNode(rootVal);
    var rootIndexInorder = inorder.indexOf(rootVal); /*    左右子树的中序*/
    var leftTreeInorder = inorder.slice(0, rootIndexInorder);
    var rightTreeInorder = inorder.slice(rootIndexInorder + 1); /*    在前序中的位置。默认为最后一个，因为它遍历不到。*/
    var preorderSplitIndex = len;
    for (var i = 0; i < preorder.length; i++) {
        var item = preorder[i];
        if (leftTreeInorder.indexOf(item) < 0) {
            preorderSplitIndex = i;
            break;
        }
    } /*    左右子树的前序*/
    var leftTreePreorder = preorder.slice(0, preorderSplitIndex);
    var rightTreePreorder = preorder.slice(preorderSplitIndex); /*    递归*/
    root.left = buildTree(leftTreePreorder, leftTreeInorder);
    root.right = buildTree(rightTreePreorder, rightTreeInorder);
    return root;
};