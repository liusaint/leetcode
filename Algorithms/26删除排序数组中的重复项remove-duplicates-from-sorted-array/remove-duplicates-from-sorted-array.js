/** * @param {number[]} nums * @return {number} */
var removeDuplicates = function(nums) { /*    已成功的,放到一个字符串中。给每一项加上前后缀确保完全匹配*/ /*    跟成功的匹配上了就删除。说明重复。*/
    var okStr = '';
    for (var i = 0; i < nums.length;) {
        item = nums[i];
        if (okStr.match('_' + item + '_')) {
            nums.splice(i, 1);
        } else {
            okStr = okStr + '_' + item + '_';
            i++;
        }
    }
    return nums.length;
};