/* leetcode　128最长连续序列longest-consecutive-sequence JavaScript实现　*/

/** * @param {number[]} nums * @return {number} */
var longestConsecutive = function(nums) {
    var item;
    var maxCount = 1;
    var sortCount = 1;
    var sortedNums = nums.sort(function(a, b) {
        return a - b;
    });
    if (nums.length == 0) {
        return 0;
    }
    var last = sortedNums[0];
    for (var i = 1; i < sortedNums.length; i++) {
        item = sortedNums[i]; /*        相等的跳过*/
        if (item - last == 0) { /*        连续的。*/ } else if (item - last == 1) {
            sortCount++; /*            不连续，重新计算。*/
            if (sortCount > maxCount) {
                maxCount = sortCount;
            }
        } else {
            sortCount = 1;
        }
        last = item;
    }
    return maxCount;
};