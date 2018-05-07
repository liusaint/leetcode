/** * @param {string} s * @return {string} */
var frequencySort = function(s) {
    var sArr = s.split('');
    var map = {}; /*    统计*/
    for (var i = 0; i < sArr.length; i++) {
        var item = sArr[i];
        if (!map[item]) {
            map[item] = 0;
        }
        map[item]++;
    } /*    转成数组*/
    var arr = [];
    for (var i in map) {
        if (!map.hasOwnProperty(i)) {
            continue;
        }
        arr.push([
            [i], map[i]
        ]);
    } /*    排序*/
    var resArr = arr.sort(function(a, b) {
        return b[1] - a[1];
    }); /*    生成字符串*/
    var res = '';
    resArr.forEach(function(v, k) {
        res = res + new Array(v[1] + 1).join(v[0]);
    });
    return res;
};