/* leetcode　014最长公共前缀longest-common-prefix JavaScript实现　*/

/** * @param {string[]} strs * @return {string} */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return '';
    } /*    第一个全部看成前缀*/
    var pre = strs[0].split('');
    strs.forEach(function(v, i) {
        if (i == 0) {
            return;
        }
        var j = 0;
        var vArr = v.split('');
        while (j <= vArr.length && j <= pre.length) {
            if (vArr[j] != pre[j]) {
                pre = pre.slice(0, j);
                break;
            }
            j++;
        }
    });
    return pre.join('');
};