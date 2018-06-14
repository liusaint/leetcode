/* leetcode　96.不同的二叉搜索树 JavaScript实现　*/

/** * @param {number} n * @return {number} */
var numTrees = function(n) {
    if (n < 2) {
        return n;
    }
    var dp = [1, 1]; /*    从第二个到第n个。*/
    for (var i = 2; i <= n; i++) {
        dp[i] = 0; /*        1到i分别作为根节点。用它前面的个数的数量*它后面的个数的数量*/
        for (var j = 1; j <= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j];
        }
    };
    return dp[n];
};