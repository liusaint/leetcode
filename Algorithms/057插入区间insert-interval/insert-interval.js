/** * Definition for an interval. * function Interval(start, end) { *     this.start = start; *     this.end = end; * } */ /** * @param {Interval[]} intervals * @param {Interval} newInterval * @return {Interval[]} */ /*合并那个题目的基础上稍微修改一下 加上了合并后的排序*/
var insert = function(intervals, newInterval) {
    intervals = intervals.concat([newInterval]); /*    保存结果*/
    var res = []; /*    遍历*/
    for (var i = 0; i < intervals.length; i++) {
        var item = intervals[i]; /*        系统有bug。传入的不是数组，要这样转一下。*/
        var itemArr = [];
        for (var a in item) {
            if (item.hasOwnProperty(a)) {
                itemArr.push(item[a])
            }
        }
        var item0 = itemArr[0];
        var item1 = itemArr[1]; /*        在哪些区间中。*/
        var min = item0;
        var max = item1; /*        遍历结果区间。*/
        for (var j = 0; j < res.length;) {
            var inItem0 = res[j][0];
            var inItem1 = res[j][1]; /*            如果在结果区间的一些区间范围中。*/ /*            则把结果区间中的对应区间删除，并替换区间最小值，最大值。*/ /*            以实现结果区间中的区间合并。*/
            if ((item0 <= inItem1 && item0 >= inItem0) || (item1 <= inItem1 && item1 >= inItem0) || (item0 <= inItem0 && item1 >= inItem0) ||                 (item0 <= inItem1 && item1 >= inItem1)) { /*                能合起来放到一个数组中。*/
                if (inItem0 < min) {
                    min = inItem0;
                }
                if (inItem1 > max) {
                    max = inItem1;
                } /*                从res中删除一个。*/
                res.splice(j, 1);
            } else {
                j++
            }
        } /*        将区间加入进去。这是经过了删除和合并处理后的。*/
        res.push([min, max]);
    }
    res.sort(function(a, b) {
        return a[0] - b[0]
    });
    return res;
};