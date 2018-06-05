/* leetcode　028实现strStr()implement-strstr JavaScript实现　*/

/** * @param {string} haystack * @param {string} needle * @return {number} */
var strStr = function(haystack, needle) {
    if (needle == '') {
        return 0;
    }
    var reg = new RegExp(needle);
    var match = haystack.match(reg);
    if (!match) {
        return -1;
    }
    return match.index;
};