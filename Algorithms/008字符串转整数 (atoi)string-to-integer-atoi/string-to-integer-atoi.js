/** * @param {string} str * @return {number} */
var myAtoi = function(str) {
    str = str.trim();
    var sign = ''; /*     如果有正负号*/
    var macthSign = str.match(/^[+-]/);
    if (macthSign) {
        sign = macthSign[0];
        str = str.slice(1);
    } /*    数字，+-号开始。*/
    var reg = /^[0-9]+/
    var matchNum = str.match(reg);
    if (matchNum) {
        var numStr = matchNum[0];
        var num = parseInt(sign + numStr, 10);
        if (-Math.pow(2, 31) > num) {
            return -Math.pow(2, 31);
        }
        if (Math.pow(2, 31) - 1 < num) {
            return Math.pow(2, 31) - 1;
        }
        return num;
    } else {
        return 0;
    }
};