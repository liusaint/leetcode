/** * @param {number} num * @return {boolean} */
var checkPerfectNumber = function(num) {
    if (num == 0) {
        return false;
    }
    var res = 0;
    var numArr = [];
    var i = 1;
    while (i < num) {
        if (num % i == 0) {
            res += i;
        }
        i++;
    }
    if (res == num) {
        return true;
    }
    return false;
};