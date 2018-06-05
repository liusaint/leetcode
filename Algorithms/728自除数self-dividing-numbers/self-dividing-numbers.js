/* leetcode　728自除数self-dividing-numbers JavaScript实现　*/

/** * @param {number} left * @param {number} right * @return {number[]} */
var selfDividingNumbers = function(left, right) {
    var item = left;
    var res = [];
    while (item <= right) {
        if (isDividingNumbers(item)) {
            res.push(item);
        }
        item++;
    }
    return res;

    function isDividingNumbers(num) {
        var itemString = num.toString();
        if (itemString.match(0)) {
            return false;
        }
        var itemArr = itemString.split('');
        var itemLen = itemArr.length;
        for (var j = 0; j < itemLen; j++) {
            if (num % itemArr[j] != 0) {
                return false;
            }
        }
        return true;
    }
};