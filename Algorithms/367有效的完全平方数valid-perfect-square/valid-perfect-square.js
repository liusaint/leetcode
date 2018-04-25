/** * @param {number} num * @return {boolean} */
var isPerfectSquare = function(num) {
    if (num == 0) {
        return true;
    }
    var i = 1;
    while (i <= num) {
        if (num / i == i) {
            return true;
        }
        i++;
    }
    return false;
};