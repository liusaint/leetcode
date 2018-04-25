/** * @param {string} s * @return {number} */
var titleToNumber = function(s) {
    var arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
    var map = {}; /*    每个字母的序号映射*/
    arr.forEach(function(v, i) {
        map[v] = i + 1;
    }); /*    反转一下，从低位开始算。同时也让次方的index正确。*/
    var sArr = s.split('').reverse();
    var res = 0; /*    26进制转换？不过没有0.*/
    sArr.forEach(function(v, i) {
        res = res + map[v] * Math.pow(26, i);
    });
    return res;
};