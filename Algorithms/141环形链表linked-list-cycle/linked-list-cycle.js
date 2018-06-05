/* leetcode　141环形链表linked-list-cycle JavaScript实现　*/

/** * Definition for singly-linked list. * function ListNode(val) { *     this.val = val; *     this.next = null; * } */ /** * @param {ListNode} head * @return {boolean} */ /*环并不一定是首尾连接*/
var hasCycle = function(head) {
    if (head == null) {
        return false;
    }
    if (head.next == null) {
        return false;
    }
    if (head.next.next == null) {
        return false;
    }
    var slow = head;
    var fast = head;
    while (fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow == fast) {
            return true;
        }
    }
    return false;
};