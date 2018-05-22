/** * @param {number} n * @return {number} */ /*已知最后一步可能走2级，也可能走1级。所以f(n-1),f(n-2)之和就是结果了。*/ /*如果一次还可能走3级呢？*/
var climbStairs = function(n) {
    if (!climbStairs.cache) {
        climbStairs.cache = {};
    }
    var cache = climbStairs.cache;
    if (cache[n]) {
        return cache[n];
    }
    if (n == 1 || n == 0) {
        return 1;
    }
    return cache[n] = climbStairs(n - 1) + climbStairs(n - 2);
};