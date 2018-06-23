/* leetcode　148.排序链表 JavaScript实现　*/

/** * Definition for singly-linked list. * function ListNode(val) { *     this.val = val; *     this.next = null; * } */
/** * @param {ListNode} head * @return {ListNode} */
var sortList = function(head) {
    if (!head) {
        return null;
    }
    var res;
    var arr = [];
    var next = head; /*    转数组*/
    while (next) {
        arr.push(next.val);
        next = next.next;
    } /*    数组排序。*/
    arr.sort(function(a, b) {
        return a - b;
    });
    res = new ListNode(arr[0]);
    next = res;
    for (var i = 1; i < arr.length; i++) {
        next.next = new ListNode(arr[i]);
        next = next.next;
    }
    return res;
};