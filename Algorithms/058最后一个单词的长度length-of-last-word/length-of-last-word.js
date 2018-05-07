/** * @param {string} s * @return {number} */
var lengthOfLastWord = function(s) {
    s = s.trim();
    if ('' == s) {
        return 0;
    }
    var sArr = s.split(/\s+/);
    return sArr[sArr.length - 1].length;
};