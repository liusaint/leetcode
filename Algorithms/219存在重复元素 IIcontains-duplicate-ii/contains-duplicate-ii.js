/** * @param {number[]} nums * @param {number} k * @return {boolean} */
var containsNearbyDuplicate = function(nums, k) {
    var len = nums.length;
    var minNum = 2;
    var item;
    var cache = {}; /*    cache中记录上一个这个值的索引。每次循环到的时候，与上一个保存的值求差。*/
    for (var i = 0; i < len; i++) {
        item = nums[i];
        if (cache[item] !== undefined && i - cache[item] <= k) {
            return true;
        }
        cache[item] = i;
    }
    return false;
};