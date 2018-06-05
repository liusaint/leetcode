/* leetcode　350两个数组的交集 IIintersection-of-two-arrays-ii JavaScript实现　*/

/** * @param {number[]} nums1 * @param {number[]} nums2 * @return {number[]} */
var intersect = function(nums1, nums2) {
    var res = [];
    var numObj1 = {};
    var numObj2 = {};
    var numLen1 = nums1.length,
        numLen2 = nums2.length;
    for (var i = 0; i < numLen1; i++) {
        var item1 = nums1[i];
        if (nums2.indexOf(item1) > -1) {
            if (!numObj1[item1]) {
                numObj1[item1] = 0;
            }
            numObj1[item1]++;
        }
    }
    for (var j = 0; j < numLen2; j++) {
        var item2 = nums2[j];
        if (numObj1[item2]) {
            if (!numObj2[item2]) {
                numObj2[item2] = 0;
            }
            numObj2[item2]++;
        }
    }
    for (var k in numObj1) {
        var min = Math.min(numObj1[k], numObj2[k]);
        while (min--) {
            res.push(Number(k));
        }
    }
    return res;
};