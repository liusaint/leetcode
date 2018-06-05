/* leetcode　168Excel表列名称excel-sheet-column-title JavaScript实现　*/

/** * @param {number} n * @return {string} */
var convertToTitle = function(n) {
    var arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var map = {}; /*    每个字母的序号映射*/
    arr.forEach(function(v, i) {
        map[i + 1] = v;
    }); /*    进制转换？*/
    var resArr = [];
    while (true) {
        var rest = n % 26; /*        除得尽，说明是26。*/
        if (rest == 0) {
            rest = 26;
        }
        resArr.push(map[rest]);
        n = (n - rest) / 26;
        if (n < 1) {
            break;
        }
    }
    return resArr.reverse().join('');
};