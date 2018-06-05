/* leetcode　500键盘行keyboard-row JavaScript实现　*/

/** * @param {string[]} words * @return {string[]} */ /*判断每个匹配的数量与字符串长度。*/
var findWords = function(words) {
    var res = [];
    var reg1 = /[qwertyuiopQWERTYUIOP]/g;
    var reg2 = /[asdfghjklASDFGHJKL]/g;
    var reg3 = /[zxcvbnmZXCVBNM]/g;
    var regArr = [reg1, reg2, reg3];
    words.forEach(function(word) {
        for (var i = 0; i < regArr.length; i++) {
            var match = word.match(regArr[i]);
            if (match) {
                if (match.length != word.length) {
                    return;
                }
            }
        }
        res.push(word);
    });
    return res;
};