/* leetcode　557反转字符串中的单词 IIIreverse-words-in-a-string-iii JavaScript实现　*/

/** * @param {string} s * @return {string} */
var reverseWords = function(s) {
    var sArr = s.split(' ');
    var resArr = sArr.map(function(s) {
        return s.split('').reverse().join('');
    });
    return resArr.join(' ');
};