/* leetcode　009回文数palindrome-number JavaScript实现　*/

/** * @param {number} x * @return {boolean} */
var isPalindrome = function(x) {
    return x.toString().split('').reverse().join('') === x.toString()
};