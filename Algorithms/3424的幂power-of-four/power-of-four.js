/** * @param {number} num * @return {boolean} */
var isPowerOfFour = function(n) {
    if (n < 1) {
        return false;
    }
    while (n >= 4) {
        if (n % 4 != 0) {
            return false;
        }
        n = n / 4;
    }
    if (n == 1) {
        return true;
    } else {
        return false;
    }
};