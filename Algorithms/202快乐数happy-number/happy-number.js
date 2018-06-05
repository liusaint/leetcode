/* leetcode　202快乐数happy-number JavaScript实现　*/

/** * @param {number} n * @return {boolean} */ /* 这个题目做得不够好。完全是通过暴力的方式通过的。没有去找规律。*/
var isHappy = function(n) { /*    计算一个数字的每一位的平方和。*/
    function getSum(n) {
        var nStr = n.toString();
        var nArr = nStr.split('');
        return nArr.reduce(function(a, b) {
            return a + Math.pow(b, 2);
        }, 0)
    }
    n = getSum(n);
    var time = new Date().getTime(); /*    无限循环了就返回false。*/
    try {
        while (n != 1) {
            n = getSum(n);
            var time1 = new Date().getTime(); /*            运行大于20ms，返回false*/
            if (time1 - time > 20) {
                return false;
            }
        }
        return true;
    } catch (e) {
        return false;
    }
};