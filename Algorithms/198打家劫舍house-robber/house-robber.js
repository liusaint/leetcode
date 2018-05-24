/** * @param {number[]} nums * @return {number} */
var rob = function(nums) {
    var len = nums.length;
    if (len < 2) {
        return nums[len - 1] ? nums[len - 1] : 0;
    }
    var dp = [nums[0], Math.max(nums[0], nums[1])];
    for (var i = 2; i < len; i++) {
        dp[i] = Math.max(dp[i - 2] + nums[i], dp[i - 1]);
    }
    return dp[len - 1];
};