/** * @param {number[]} nums * @param {number} val * @return {number} */
var removeElement = function(nums, val) {
    for (var i = 0; i < nums.length;) {
        item = nums[i];
        if (item == val) {
            nums.splice(i, 1);
        } else {
            i++;
        }
    }
    return nums.length;
};