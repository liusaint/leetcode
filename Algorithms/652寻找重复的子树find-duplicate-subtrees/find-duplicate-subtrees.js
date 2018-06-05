/* leetcode　652.寻找重复的子树 JavaScript实现　*/

/*序列化所有节点。以节点为key放到一个对象。如果值为2，就把节点加入到结果中。*/
var findDuplicateSubtrees = function(root) {
    var res = [];
    var obj = {};
    var helper = function(root) {
        if (!root) {
            return '';
        }
        var str = serialize(root);
        if (obj[str] === undefined) {
            obj[str] = 0;
        }
        obj[str]++;
        if (obj[str] == 2) {
            res.push(root);
        }
        root.left && helper(root.left);
        root.right && helper(root.right);
    } /*     序列化。*/
    var serialize = function(root) {
        if (root == null) {
            return '[]';
        }
        var checkArr = [root];
        var resArr = [root.val];
        while (checkArr.length > 0) {
            var newCheckArr = [];
            for (var i = 0; i < checkArr.length; i++) {
                var item = checkArr[i];
                if (item.left) {
                    newCheckArr.push(item.left);
                    resArr.push(item.left.val);
                } else {
                    resArr.push(null);
                }
                if (item.right) {
                    newCheckArr.push(item.right);
                    resArr.push(item.right.val);
                } else {
                    resArr.push(null);
                }
            }
            checkArr = newCheckArr;
        }
        return JSON.stringify(resArr);
    };
    helper(root);
    return res;
};