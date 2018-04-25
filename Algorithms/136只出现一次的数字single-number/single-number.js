/** * @param {number[]} nums * @return {number} */
var singleNumber = function(nums) {
    var len = nums.length;
    var item;
    var cache = {} /*    indexOf与lastIndexOf比较。如是一样。说明只有一个。*/
    for (var i = 0; i < len; i++) {
        item = nums[i];
        if (!cache[item]) {
            cache[item] = 0;
        }
        cache[item]++; /*        如果是2了，就删除它。*/
        if (cache[item] == 2) {
            delete cache[item];
        }
    }
    for (var i in cache) {
        if (cache.hasOwnProperty(i)) {
            return parseInt(i, 10);
        }
    }
};