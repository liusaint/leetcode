/* leetcode　572另一个树的子树subtree-of-another-tree JavaScript实现　*/

/*遍历判断子节点是否跟子树相同。*/
var isSubtree = function(s, t) {
    var isSameTree = function(p, q) {
        if (p == null && q != null) {
            return false;
        }
        if (p != null && q == null) {
            return false;
        } /*        查询到子节点都为null时结束。*/
        if (p == null && q == null) {
            return true;
        }
        if (p.val != q.val) {
            return false;
        } /*         递归对比左叶与右叶。*/
        return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
    };

    function check(s, t) {
        return isSameTree(s, t) || (s && check(s.left, t)) || (s && check(s.right, t)) || false;
    }
    return check(s, t);
};