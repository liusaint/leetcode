/*1.动态规划不一定要递归。关键是理解整个生成的流程。初始条件，以及中间值的选择逻辑。*/
var minCostClimbingStairs = function(cost) {
    var n = cost.length;
    if (cost.length < 2) {
        return cost[n - 1] ? cost[n - 1] : 0;
    }
    var dp = [cost[0], cost[1]];
    for (var i = 2; i < n; i++) {
        dp.push(Math.min(dp[i - 1], dp[i - 2]) + cost[i]);
    } /*    这个意思是最后一步可能不踩在台阶上？而是说比如到倒数第二级，走两步，不踩在最后一级上，就不会加值？*/
    return Math.min(dp[dp.length - 1], dp[dp.length - 2]);
};