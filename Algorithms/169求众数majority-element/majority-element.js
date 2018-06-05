/* leetcode　169求众数majority-element JavaScript实现　*/

/** * @param {number[]} nums * @return {number} */
var majorityElement = function(nums) {
    var len = nums.length;
    var halfLen = len / 2;
    var item;
    var cache = {};
    for (var i = 0; i < len; i++) {
        item = nums[i];
        if (cache[item] === undefined) {
            cache[item] = 1;
        } else {
            cache[item]++;
        }
        if (cache[item] > halfLen) {
            return item;
        }
    }
};