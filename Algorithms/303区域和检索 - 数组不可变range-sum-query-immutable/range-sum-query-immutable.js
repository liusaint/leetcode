/*动态规划。保存一个数组，包含所有位的和。这样只是初始化的时候慢。但是后面的sumRange就很快了。*/
var NumArray = function(nums) {
    this.sums = [];
    var sums = this.sums;
    if (nums.length > 0) {
        sums[0] = nums[0];
        for (var i = 1; i <= nums.length; i++) {
            sums[i] = sums[i - 1] + nums[i];
        }
    }
};
NumArray.prototype.sumRange = function(i, j) {
    var sums = this.sums;
    if (i == 0) {
        return sums[j];
    } else {
        return sums[j] - sums[i - 1];
    }
};