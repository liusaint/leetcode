/** * @param {string} s * @return {string} */
var reverseWords = function(s) {
    var sArr = s.split(' ');
    var resArr = sArr.map(function(s) {
        return s.split('').reverse().join('');
    });
    return resArr.join(' ');
};