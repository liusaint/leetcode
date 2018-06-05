/* leetcode　268缺失数字missing-number JavaScript实现　*/

/** * @param {number[]} nums * @return {number} */
var missingNumber = function(nums) {
    var resArr = [];
    for (var i = 0; i < nums.length; i++) {
        var v = nums[i];
        var toPush = '';
        if (nums.indexOf(v - 1) < 0) {
            toPush = v - 1; /*            如果然已经有了这个数。说明我们要找的就是这个数*/
            if (resArr.indexOf(toPush) > -1) {
                return toPush
            }
            resArr.push(toPush)
        }
        if (nums.indexOf(v + 1) < 0) {
            toPush = v + 1;
            if (resArr.indexOf(toPush) > -1) {
                return toPush
            }
            resArr.push(toPush)
        }
    }
    if (resArr[0] < resArr[1]) {
        var min = resArr[0];
        var max = resArr[1];
    } else {
        var min = resArr[1];
        var max = resArr[0];
    }
    if (min == 0) {
        return min;
    } else {
        return max;
    }
};