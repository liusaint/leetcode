/** * @param {string} J * @param {string} S * @return {number} */
var numJewelsInStones = function(J, S) {
    var jArr = J.split('');
    var jLen = jArr.length;
    var item, i = 0,
        match, reg, res = 0;
    for (i; i < jLen; i++) {
        item = jArr[i]; /*        注意这里使用变量动态生成正则。*/
        reg = new RegExp(item, 'g');
        var match = S.match(reg);
        if (match) {
            res = res + match.length;
        }
    }
    return res;
};