/** * @param {number[]} nums * @return {number[]} */
var majorityElement = function(nums) {
    var len = nums.length;
    var thirdLen = len / 3;
    var item;
    var cache = {};
    var res = [];
    for (var i = 0; i < len; i++) {
        item = nums[i];
        if (cache[item] === undefined) {
            cache[item] = 1;
        } else {
            cache[item]++;
        }
        if (cache[item] > thirdLen && res.indexOf(item) < 0) {
            res.push(item);
        }
    }
    return res;
};