/* leetcode　345反转字符串中的元音字母reverse-vowels-of-a-string JavaScript实现　*/

/** * @param {string} s * @return {string} */ /*把元音匹配出来翻转一下，再遍历数组，遇到元音就取第一个匹配给它。*/
var reverseVowels = function(s) {
    if (s == undefined || s == '') {
        return '';
    }
    var reg = /[aeiouAEIOU]/g;
    var match = s.match(reg);
    if (!match) {
        return s;
    }
    var reverseMathcArr = match.reverse();
    var sArr = s.split('');
    for (var i = 0; i < sArr.length; i++) {
        var item = sArr[i];
        if (item.match(reg)) {
            sArr[i] = reverseMathcArr.shift();
        }
    }
    return sArr.join('');
};