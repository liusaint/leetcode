/** * @param {number[]} nums * @return {number[]} */
var findDuplicates = function(nums) { /*    长度*/
    var len = nums.length; /*    生成一个每个值为0的数组。长度为数组长度。*/
    let res = (new Array(len + 1)).join('0').split('');
    for (var i = 0; i < len; i++) {
        var item = nums[i]; /*            用-1;因为如果+1的话遇到真正的1，2时过滤会出错*/
        res[item - 1] = parseInt(res[item - 1]) - 1;
        if (res[item - 1] === -2) {
            res[item - 1] = item;
        }
    }
    return res.filter(function(v, i) {
        return v != '0' && v != -1;
    });
};