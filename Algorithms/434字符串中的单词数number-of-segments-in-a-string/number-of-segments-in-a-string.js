/** * @param {string} s * @return {number} */
var countSegments = function(s) {
    s = s.trim();
    if ('' == s) {
        return 0;
    }
    var sArr = s.split(/\s+/);
    return sArr.length;
};