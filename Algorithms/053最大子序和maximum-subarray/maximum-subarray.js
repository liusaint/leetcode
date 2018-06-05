/* leetcode　053最大子序和maximum-subarray JavaScript实现　*/

/*一段一段地计算比较。不以负数开头和结尾。不过要考虑全是负数的情况*/ /*小于0了就重启一段。复杂度O(n);*/
var maxSubArray = function(nums) {
    var max = nums[0];
    var sum = 0;
    var len = nums.length;
    if (len == 0) {
        return 0;
    }
    for (var i = 0; i < len; i++) {
        var item = nums[i]; /*         针对的情况 [-3,-2,1,2,2,0,1,0]*/
        if (sum < 0 && item >= 0) {
            sum = item;
            max = sum;
        } else {
            sum += item;
        }
        if (sum > max) {
            max = sum;
        } else if (item > max) {
            max = item;
        } else if (sum < 0) {
            sum = 0;
        }
    }
    return max;
};