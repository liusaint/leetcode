/** * @param {string[]} words * @return {string} */
var longestWord = function(words) {
    var res = '';
    words.forEach(function(v, i, arr) {
        var originV = v;
        while (v.length > 1) {
            v = v.slice(0, v.length - 1); /*            检查少一个字符的有没有在该数组中*/
            if (arr.indexOf(v) < 0) {
                return false;
            }
        }
        if (originV.length > res.length) {
            res = originV;
        } /*        判断字典序*/
        if (originV.length == res.length && originV < res) {
            res = originV;
        }
    });
    return res;
};