/* leetcode　806写字符串需要的行数number-of-lines-to-write-string JavaScript实现　*/

/** * @param {number[]} widths * @param {string} S * @return {number[]} */
var numberOfLines = function(widths, S) {
    var arr = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var map = {}; /*    每个字母的序号映射*/
    arr.forEach(function(v, i) {
        map[v] = widths[i];
    });
    var sArr = S.split('');
    var row = 1;
    var countNum = 0;
    sArr.forEach(function(v, i) {
        var wLen = map[v]; /*        如果加上最后一个字超过了100，则加一行，新一行有n位。*/
        if (countNum + wLen > 100) {
            row++;
            countNum = wLen;
        } else {
            countNum = countNum + wLen;
        }
    });
    return [row, countNum];
};