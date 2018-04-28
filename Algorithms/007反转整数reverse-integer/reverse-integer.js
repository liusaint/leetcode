/** * @param {number} x * @return {number} */
var reverse = function(x) {
    var sign = '';
    var str = x.toString();
    if (x >= 0) {
        sign = '';
    } else {
        sign = '-';
        str = str.split('-')[1];
    }
    var revStr = str.split('').reverse().join('');
    var resStr = sign + revStr;
    var resNum = parseInt(resStr);
    if (-Math.pow(2, 31) > resNum || Math.pow(2, 31) - 1 < resNum) {
        return 0;
    }
    return resNum;
};