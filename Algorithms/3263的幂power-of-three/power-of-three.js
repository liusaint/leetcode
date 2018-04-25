/** * @param {number} n * @return {boolean} */ /*不用循环怎么做*/
var isPowerOfThree = function(n) {
    if (n < 1) {
        return false;
    }
    while (n >= 3) {
        if (n % 3 != 0) {
            return false;
        }
        n = n / 3;
    }
    if (n == 1) {
        return true;
    } else {
        return false;
    }
};