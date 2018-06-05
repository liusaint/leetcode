/* leetcode　217存在重复元素contains-duplicate JavaScript实现　*/

/** * @param {number[]} nums * @return {boolean} */
var containsDuplicate = function(nums) {
    var len = nums.length;
    var minNum = 2;
    var item;
    var cache = {};
    for (var i = 0; i < len; i++) {
        item = nums[i];
        if (cache[item] === undefined) {
            cache[item] = 1;
        } else {
            cache[item]++;
        }
        if (cache[item] >= minNum) {
            return true;
        }
    }
    return false;
};