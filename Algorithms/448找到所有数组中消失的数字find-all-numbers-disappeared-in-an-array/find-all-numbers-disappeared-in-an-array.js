/** * @param {number[]} nums * @return {number[]} */
var findDisappearedNumbers = function(nums) {
    var len = nums.length; /*    不用循环生成数组0到n*/
    let res = [...(new Array(len + 1)).keys()];
    res.splice(0, 1);
    for (var i = 0; i < len; i++) {
        var item = nums[i];
        if (res[item - 1]) {
            res[item - 1] = 0;
        }
    }
    return res.filter(function(v, i) {
        return v != 0;
    });
};