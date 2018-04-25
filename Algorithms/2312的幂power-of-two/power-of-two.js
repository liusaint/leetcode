/** * @param {number} n * @return {boolean} */
var isPowerOfTwo = function(n) {
    if (n < 1) {
        return false;
    }
    if (n == 1) {
        return true;
    }
    do {
        if (n % 2 != 0) {
            return false;
        }
        n = n / 2;
    } while (n >= 2) return true;
};