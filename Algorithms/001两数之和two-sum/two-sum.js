/* leetcode　001两数之和two-sum JavaScript实现　*/

/** * @param {number[]} nums * @param {number} target * @return {number[]} */
var twoSum = function(nums, target) {
    var i = 0,
        j, len = nums.length,
        item, inItem;
    for (i; i < len; i++) {
        item = nums[i];
        for (j = i + 1; j < len; j++) {
            inItem = nums[j];
            if (item + inItem == target) {
                return [i, j];
            }
        }
    }
};