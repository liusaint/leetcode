/*先转成数组*/
var sortedListToBST = function(head) {
    var arr = [];
    if (head == null) {
        arr = [];
    }
    var next = head;
    while (next) {
        arr.push(next.val);
        next = next.next;
    }
    var sortedArrayToBST = function(nums) {
        var len = nums.length;
        var mid = Math.floor(len / 2);
        if (len == 0) {
            return null;
        }
        var node = new TreeNode(nums[mid]);
        if (mid > 0) {
            node.left = sortedArrayToBST(nums.slice(0, mid));
        }
        if (mid + 1 <= len) {
            node.right = sortedArrayToBST(nums.slice(mid + 1));
        }
        return node;
    };
    return sortedArrayToBST(arr);
}