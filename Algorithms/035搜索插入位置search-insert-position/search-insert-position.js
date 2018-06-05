/* leetcode　035搜索插入位置search-insert-position JavaScript实现　*/

/** * @param {number[]} nums * @param {number} target * @return {number} */
var searchInsert = function(nums, target) {
    for (var i = 0; i <= nums.length; i++) {
        var num = nums[i];
        if (target <= num) {
            return i;
        }
    }
    return nums.length;
};