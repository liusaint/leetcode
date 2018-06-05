/* leetcode　349两个数组的交集intersection-of-two-arrays JavaScript实现　*/

/** * @param {number[]} nums1 * @param {number[]} nums2 * @return {number[]} */
var intersection = function(nums1, nums2) {
    var res = [];
    for (var i = 0; i < nums1.length; i++) {
        var item = nums1[i];
        if (nums2.indexOf(item) > -1 && res.indexOf(item) < 0) {
            res.push(item);
        }
    }
    return res;
};