/* leetcode　21.合并两个有序链表 JavaScript实现　*/

/** * Definition for singly-linked list. * function ListNode(val) { *     this.val = val; *     this.next = null; * } */
/** * @param {ListNode} l1 * @param {ListNode} l2 * @return {ListNode} */
var mergeTwoLists = function(l1, l2) {
    var l1Next = l1;
    var l2Next = l2;
    var res;
    var resNext;
    if (!l1) {
        return l2;
    }
    if (!l2) {
        return l1;
    }
    while (l1Next && l2Next) {
        var val1 = l1Next.val;
        var val2 = l2Next.val;
        if (val1 <= val2) {
            if (!res) {
                res = new ListNode(val1);
                resNext = res;
            } else { /*                给next赋值*/
                resNext.next = new ListNode(val1); /*                移动索引。*/
                resNext = resNext.next;
            }
            l1Next = l1Next.next;
        } else {
            if (!res) {
                res = new ListNode(val2);
                resNext = res;
            } else {
                resNext.next = new ListNode(val2);
                resNext = resNext.next;
            }
            l2Next = l2Next.next;
        }
    } /*    剩下的直接加后面*/
    if (l1Next) {
        resNext.next = l1Next;
    }
    if (l2Next) {
        resNext.next = l2Next;
    }
    return res;
};