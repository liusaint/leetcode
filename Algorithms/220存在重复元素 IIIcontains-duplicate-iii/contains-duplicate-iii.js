/* leetcode　220存在重复元素 IIIcontains-duplicate-iii JavaScript实现　*/

/** * @param {number[]} nums * @param {number} k * @param {number} t * @return {boolean} */
var containsNearbyAlmostDuplicate = function(nums, k, t) {
    var len = nums.length;
    var item, item1; /*    cache中记录上一个这个值的索引。每次循环到的时候，与上一个保存的值求差。*/
    for (var i = 0; i < len; i++) {
        item = nums[i]; /*        循环小于k的索引*/
        for (var j = i + 1; j < len && j <= i + k; j++) {
            item1 = nums[j]; /*            判断绝对差值*/
            if (Math.abs(item1 - item) <= t) {
                return true;
            }
        }
    }
    return false;
};