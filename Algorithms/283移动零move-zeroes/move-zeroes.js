/** * @param {number[]} nums * @return {void} Do not return anything, modify nums in-place instead. */
var moveZeroes = function(nums) {
    var zeroCount = 0;
    for (var i = 0; i < nums.length - zeroCount;) {
        item = nums[i];
        if (item == 0) {
            nums.push(0);
            nums.splice(i, 1);
            zeroCount++;
        } else {
            i++;
        }
    }
};