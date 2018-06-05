/* leetcode　485最大连续1的个数max-consecutive-ones JavaScript实现　*/

/** * @param {number[]} nums * @return {number} */
var findMaxConsecutiveOnes = function(nums) {
    var numsStr = nums.join(''); /*    正则匹配1。判断最长的匹配。*/
    var reg = /1+/g;
    var match = numsStr.match(reg);
    var max = 0;
    if (!match) {
        return max;
    }
    match.forEach(function(v, i) {
        if (v.length > max) {
            max = v.length;
        }
    });
    return max;
};