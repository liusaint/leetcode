/* leetcode　344反转字符串reverse-string JavaScript实现　*/

/** * @param {string} s * @return {string} */
var reverseString = function(s) {
    return s.split('').reverse().join('');
};