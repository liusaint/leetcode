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