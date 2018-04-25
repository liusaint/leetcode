/** * @param {number[]} nums * @return {number[]} */
var singleNumber = function(nums) {
    var cache = {};
    var item;
    for (var i = 0; i < nums.length; i++) {
        item = nums[i];
        if (cache[item] == undefined) {
            cache[item] = 0
        }
        cache[item]++;
        if (cache[item] == 2) {
            delete cache[item];
        }
    }
    var keys = Object.keys(cache);
    var res = [parseInt(keys[0]), parseInt(keys[1])];
    return res
};