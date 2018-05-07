/** * @param {string} s * @return {number} */
var firstUniqChar = function(s) {
    var sArr = s.split('');
    for (var i = 0; i < sArr.length; i++) {
        var item = sArr[i];
        if (sArr.indexOf(item) == sArr.lastIndexOf(item)) {
            return i;
        }
    }
    return -1;
};