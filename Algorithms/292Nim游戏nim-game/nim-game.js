/** * @param {number} n * @return {boolean} */
var canWinNim = function(n) {
    var first = n % 4; /*    第一把拿了，剩下的如果是4的位数就稳赢了。*/
    if (0 < first && first < 4) {
        return true;
    }
    return false;
};