/* leetcode　459重复的子字符串repeated-substring-pattern JavaScript实现　*/

/** * @param {string} s * @return {boolean} */
var repeatedSubstringPattern = function(s) {
    var strLen = s.length;
    for (var i = 0; i < strLen; i++) {
        var item = s.slice(0, i);
        var len = item.length; /*        除不尽则跳过。*/
        if (strLen % len != 0) {
            continue;
        }
        var n = strLen / len; /*         字符串乘法*/
        var joinStr = new Array(n + 1).join(item);
        if (joinStr == s) {
            return true;
        }
    }
    return false;
};