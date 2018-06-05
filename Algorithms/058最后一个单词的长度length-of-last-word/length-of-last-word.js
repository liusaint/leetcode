/* leetcode　058最后一个单词的长度length-of-last-word JavaScript实现　*/

/** * @param {string} s * @return {number} */
var lengthOfLastWord = function(s) {
    s = s.trim();
    if ('' == s) {
        return 0;
    }
    var sArr = s.split(/\s+/);
    return sArr[sArr.length - 1].length;
};