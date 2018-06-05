/* leetcode　633平方数之和sum-of-square-numbers JavaScript实现　*/

/** * @param {number} c * @return {boolean} */
var judgeSquareSum = function(c) {
    var i = 0;
    while (i <= c) {
        var afterPow = c - Math.pow(i, 2);
        if (afterPow < 0) {
            return false;
        }
        var item = Math.sqrt(afterPow); /*        判断有没有小数部分*/
        if (item % 1 == 0) {
            return true;
        }
        i++;
    }
    return false;
};