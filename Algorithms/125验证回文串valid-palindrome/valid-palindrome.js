/** * @param {string} s * @return {boolean} */
var isPalindrome = function(s) {
    if (s.length == 0) {
        return true;
    }
    var s1 = s.toLocaleLowerCase(); /*    正则替换掉*/
    var s2 = s1.replace(/\W|_/g, '');
    return s2.split('').reverse().join('') == s2;
};