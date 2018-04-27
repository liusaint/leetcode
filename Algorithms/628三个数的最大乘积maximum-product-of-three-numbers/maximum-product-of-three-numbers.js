/** * @param {number[]} nums * @return {number} */
var maximumProduct = function(nums) {
    var sotedArr = nums.sort(function(a, b) {
        return a - b;
    });
    var len = nums.length; /*        不大于0的*/
    var smallArr = []; /*    大于0的*/
    var bigArr = [];
    for (var i = 0; i < sotedArr.length; i++) {
        if (sotedArr[i] <= 0) {
            smallArr.push(sotedArr[i]);
        } else {
            bigArr.push(sotedArr[i]);
        }
    } /*    负负得正。*/
    var twoRes;
    var bigLen = bigArr.length;
    var smallLen = smallArr.length; /*    如果全是小于等于0的。*/
    if (bigLen == 0) {
        return smallArr[smallLen - 1] * smallArr[smallLen - 2] * smallArr[smallLen - 3]; /*        只有一个大于0的。*/
    } else if (bigLen == 1) {
        return smallArr[0] * smallArr[1] * bigArr[0]; /*        后面的都是len大于等于2的。*/
    } else if (bigArr.length > 2 && smallArr.length >= 2) {
        var bigRes = bigArr[bigArr.length - 1] * bigArr[bigArr.length - 2];
        var smallRes = smallArr[0] * smallArr[1];
        return Math.max(bigRes * bigArr[bigLen - 3], smallRes * bigArr[bigLen - 1]); /*        为负的情况 */
    } else {
        return sotedArr[len - 1] * sotedArr[len - 2] * sotedArr[len - 3]
    }
};