/* leetcode　122买卖股票的最佳时机 IIbest-time-to-buy-and-sell-stock-ii JavaScript实现　*/

/** * @param {number[]} prices * @return {number} */
var maxProfit = function(prices) {
    var n = prices.length;
    var maxProfit = 0;
    if (n < 2) {
        return maxProfit;
    }
    var min = prices[0]; /*    比前面一个数大，就加上与前面一个数的差。*/ /*    比前面的小，就以当前这个数为最小数。*/
    for (var i = 1; i < n; i++) {
        var item = prices[i];
        var prev = prices[i - 1];
        if (item >= prev) {
            maxProfit = maxProfit + (item - prev);
        } else {
            min = item;
        }
    }
    return maxProfit;
};