/* leetcode　561数组拆分 Iarray-partition-i JavaScript实现　*/

/** * @param {number[]} nums * @return {number} */ /* 先排个序。然后依次取双数序号index的。*/ /* 注意sort排序内部并不完全是按大小的。[6214, -2290, 2833, -7908]。所以需要加逻辑。*/
var arrayPairSum = function(nums) { /*    这里要是a-b。不能是a<b,a>b,a-b>0。[11, 41, -9046, 2047, 1118, 8477, 8446, 279, 4925, 7380, -1719, 3855]有点奇怪。要再看一下。*/
    nums.sort(function(a, b) {
        return a - b;
    });
    var sum = 0;
    var len = nums.length;
    for (var i = 0; i < len; i = i + 2) {
        sum += nums[i];
    }
    return sum;
};