/* leetcode　88.合并两个有序数组 JavaScript实现　*/

var merge = function(nums1, m, nums2, n) {
    var dealNum2 = nums2.slice(0, n);
    nums1.length = m;
    for (var i = 0; i < nums1.length && dealNum2.length > 0; i++) {
        var n1 = nums1[i];
        var n2 = dealNum2[0]; /*        比nums1中的数小或等就插入在前面。*/
        if (n2 <= n1) {
            nums1.splice(i, 0, n2);
            dealNum2.shift();
        }
    } /*    剩下的放在后面*/
    if (dealNum2.length > 0) {
        [].push.apply(nums1, dealNum2);
    }
}